import * as functions from 'firebase-functions';

const { createHandler } = require("image-resizing");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});

export const img = functions.https.onRequest(createHandler({
  // Where the source images are located.
  // E.g. gs://s.example.com/image.jpg
  sourceBucket: "cdn-test-3fd2f.appspot.com",
  // Where the transformed images needs to be stored.
  // E.g. gs://c.example.com/image__w_80,h_60.jpg
  cacheBucket: "cdn-test-cache",
}));