export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'place',
        title: 'Place',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: "projectType",
        title: "Project type",
        type: "string",
        options: {
            list: [
                // DROP DOWN LIST
                {value: "personal",title: "Personal"},
                {value: "client",title: "Client"},
                {value: "school",title: "School"},
            ]
          },
      },
      {
        name: "link",
        type: "url",
      },
      {
        name: "tags",
        type: "array",
        of: [
            {
                type: "string",
            },
        ],
        options: {
            layout: "tags",
        },
      },
    ],
  };
  