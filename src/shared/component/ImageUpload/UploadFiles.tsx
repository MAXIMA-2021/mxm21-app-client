import { createIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { FileError, useDropzone } from "react-dropzone";
import { UploadContainer } from "../../styled/containers";
import { Palette } from "../../../types/enums";
import { useForm } from "react-hook-form";

// interface UploadableFile {
//   file: File;
//   errors: FileError[];
// }

const IconUpload = createIcon({
  displayName: "Upload",
  viewBox: "0 0 48 32",
  d: "M38.7 12.08C37.34 5.18 31.28 0 24 0C18.22 0 13.2 3.28 10.7 8.08C4.68 8.72 0 13.82 0 20C0 26.62 5.38 32 12 32H38C43.52 32 48 27.52 48 22C48 16.72 43.9 12.44 38.7 12.08ZM28 18V26H20V18H14L24 8L34 18H28Z",
});

const UploadFiles = (props: any) => {
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const { register } = useForm();
  // const [inputFile, setInputFile] = useState("");

  // const handleChange = (event: any) => {
  //   console.log(event.target.value);
  // };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setMyFiles([...myFiles, ...acceptedFiles]);
  }, []);

  const onDragEnter = (event: any) => {
    event.target.classList.remove("file-rejected");
    event.target.classList.add("file-enters");
  };

  const onDragLeave = (event: any) => {
    event.target.classList.remove("file-enters");
  };

  const onDropRejected = (fileRejections: any[], event: any) => {
    event.target.classList.remove("file-enters");
    event.target.classList.add("file-rejected");
  };

  const onDropAccepted = (files: any[], event: any) => {
    event.target.classList.remove("file-enters");
    console.log(event);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: props.maxfiles || 1,
    onDragEnter,
    onDragLeave,
    onDrop,
    onDropRejected,
    onDropAccepted,
  });

  const removeFile = (file: any) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };
  //   const removeAll = () => {
  //     setMyFiles([]);
  //   };

  const files = myFiles.map((file) => (
    <Flex key={file.name} alignItems="center" justifyContent="space-between">
      <p style={{ fontFamily: "Poppins", fontSize: "0.8em" }}>{file.name}</p>
      <Button
        backgroundColor={Palette.Red}
        color="white"
        onClick={removeFile(file)}
        boxShadow="-1.2px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        size="sm"
        _hover={{ backgroundColor: "#C71034" }}
        marginTop={"10px"}
      >
        Hapus
      </Button>
    </Flex>
  ));

  return (
    <div>
      <UploadContainer {...getRootProps({ className: "dropzone" })}>
        <input
          {...getInputProps()}
          // {...register("linkLogo", {
          //   required: "Isi logo",
          // })}
        />
        <IconUpload boxSize="3.5em" />
        <p style={{ fontFamily: "Poppins", fontSize: "0.8em" }}>
          Drag and Drop atau{" "}
          <span style={{ color: "blue" }}>
            <u>Klik Di Sini</u>
          </span>
        </p>
        <em style={{ fontFamily: "Poppins", fontSize: "0.8em" }}>
          maksimal upload : {props.isiKeterangan || "1 file"}
        </em>
      </UploadContainer>
      {files}
    </div>
  );
};

export default UploadFiles;
