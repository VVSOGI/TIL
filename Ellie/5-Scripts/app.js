// import fs from "fs";
// import path from "path";
// import os from "os";
// import { imageSeparater } from "./functions.js";

// console.clear();
// // console.log(path.parse(__dirname));

// const imageDir = [];
// const duplicated = [];
// const videoDir = [];
// const ETC = [];

// fs.promises
//   .readdir("./")
//   .then((data) => {
//     data.forEach((item) => {
//       const extensionSplit = item.split(".");
//       const [name, extension] = extensionSplit;
//       if (extension === "jpg") {
//         imageSeparater(item, name, imageDir, duplicated);
//       } else if (extension === "png") {
//         imageDir.push(item);
//       } else if (extension === "mp4" || extension === "mov") {
//         videoDir.push(item);
//       } else if (extension === "aae") {
//         ETC.push(item);
//       }
//       // 각 배열에 정보를 담음.
//     });

//     const videoFolderCheck = data.indexOf("Video") === -1;
//     const imageFolderCheck = data.indexOf("Image") === -1;
//     const dupFolderCheck = data.indexOf("duplicate") === -1;
//     const etcFolderCheck = data.indexOf("ETC") === -1;

//     const workingDir = path.basename(".");
//     console.log(workingDir);
//     if (videoFolderCheck) {
//       fs.promises
//         .mkdir("Video")
//         .then(() => {
//           let readStream = fs.createReadStream("a.mp4");
//           let writeStream = fs.createWriteStream("Video");
//           //   console.log(readStream, writeStream);
//           readStream.on("error", (error) => console.error(error));
//           writeStream.on("error", (error) => console.error(error));
//         })
//         .catch((error) => console.error(error));
//     }
//     // if (imageFolderCheck) {
//     //   fs.promises.mkdir("Images").catch((error) => console.error(error));
//     // }
//     // if (dupFolderCheck) {
//     //   fs.promises.mkdir("duplicate").catch((error) => console.error(error));
//     // }
//     // if (etcFolderCheck) {
//     //   fs.promises.mkdir("ETC").catch((error) => console.error(error));
//     // }
//   })
//   .catch((error) => console.error(error));
