type ProjectProps = {
    project: string,
    dateCreated: string,
    draft: boolean,
    pageLink: string,
}

export const ProjectsList: Array<ProjectProps> = [{
    project: "Masterclass dropdown menu",
    dateCreated: "Saturday, 2 March 2024",
    draft: false,
    pageLink: "/projects/masterclass_dropdown"
}, {
    project: "Recreating the Gallery Hover Effect from Mr. Pops' Website",
    dateCreated: "Sunday, 3 March 2024",
    draft: false,
    pageLink: "/projects/mr_pops_gallery_hover"
}
]