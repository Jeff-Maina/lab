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
}, {
    project: "Raphael Salaja's navigation bar concept from twitter",
    dateCreated: "Sunday, 3 March 2024",
    draft: false,
    pageLink: "/projects/raphael_salaja_navigation_bar_concept"
}, {
    project: "Fixed vertical navigation bar (scrollspy)",
    dateCreated: "Monday, 4 March 2024",
    draft: false,
    pageLink: "/projects/fixed_vertical_navigation_bar"
}, {
    project: "Framer motion velocity-based animation",
    dateCreated: "Monday, 4 March 2024",
    draft: true,
    pageLink: "/projects/framer_motion_velocity"
}, {
    project: "Vercel's navigation bar",
    dateCreated: "Thursday, 7 March 2024",
    draft: false,
    pageLink: "/projects/vercels_navbar"
}
    , {
    project: "Chat GPT's reply feature",
    dateCreated: "Friday, 8 March 2024",
    draft: false,
    pageLink: "/projects/chat_gpt_reply_feature"
}, {
    project: "Andreas Antonsson website scrollspy",
    dateCreated: "Saturday, 9 March 2024",
    draft: false,
    pageLink: "/projects/andreas_antonsson_website_scrollspy"
}
]

