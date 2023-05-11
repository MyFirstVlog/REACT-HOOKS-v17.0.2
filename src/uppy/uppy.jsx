import React, { useEffect } from 'react';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
// import Webcam from '@uppy/';
import XHRUpload from '@uppy/xhr-upload';
import GoogleDrive from '@uppy/google-drive';
import { Dashboard } from '@uppy/react';
import Transloadit from '@uppy/transloadit';

// Don't forget the CSS: core and the UI components + plugins you are using.
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';

const COMPANION_URL = "https://www.googleapis.com";
// const COMPANION_URL = "http://localhost:3000"; //* To connect with some internal app authentication
const companionAllowedHosts = [];

const uppy = new Uppy({
    onBeforeFileAdded:(currentFile, files) => {
        console.log({currentFile, files});
    },
    onBeforeUpload : (files) => {
        console.log("beofre upload", {files});  
    },
    // meta: {
    //  title: 'hola',
    // },
    
})
    .use(Webcam)
    .use(XHRUpload, {
        endpoint: 'http://localhost:3000/api/uppy/upload',
        limit: 1,
        bundle: true,
        fieldName: 'file',
        formData: true
      })
    .use(GoogleDrive, {
        companionUrl: COMPANION_URL,
        companionAllowedHosts,
    })
    .use(Transloadit, {
        waitForEncoding: true,
        alwaysRunAssembly: true,
        assemblyOptions: {
            params: {
                auth: { key: '8245c842884c4841b2f4c6f8c4c7e1e8' }, // transloadi key (credentials)
                template_id: '4ba544aeb6cb4b61ae08da31665b6f3f',
            },
        },
    })
    .on('complete', ({ transloadit }) => {
        // Due to waitForEncoding:&nbsp;true this is fired after encoding is done.
        // Alternatively, set waitForEncoding to false and provide a notify_url
        console.log(transloadit) // Array of Assembly Statuses
        transloadit.forEach((assembly) => {
          console.log(assembly.results) // Array of all encoding results
        })
      })
    .on('error', (error) => {
    console.error(error)
    })
    // uppy.on("complete", (result) => {
    //     console.log('complete');
    // });
    // uppy.on("upload", (result) => {
    //     console.log('upload');
    // });

export const UppyComponent = () => {
  return (
     <Dashboard showProgressDetails={true} uppy={uppy} plugins={['Webcam', 'GoogleDrive']} />
  )
}
