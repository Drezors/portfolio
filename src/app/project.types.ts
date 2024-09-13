// Une simple déclaration du type pour être utilisé lorsque tu vas parser ton objet, il n'y a pas d'erreur avec javascript, mais attention quand même l'utilisation des types en typescript c'est ce qui fait sa force
export type Project = {
    name: string
    slug: string
    description: string
    technologies: string[]
    projectUrl: string
    t: string
}