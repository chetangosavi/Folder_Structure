const folderData = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public file 1",
          isFolder: false,
        },
        {
            id: 4,
            name:"public file 2",
            isFolder:false
        },
      ],
    },
  ],
};

export default folderData;
