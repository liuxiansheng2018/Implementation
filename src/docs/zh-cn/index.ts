
type Child = {
    title: String
    group: String
    route: {
        name: String
    }
}

type Routes = {
    name: String
    children: Child[]
}
export const zhRoutes: Routes[] = [
    {
        name: '快速上手',
        children: [
            {title: '安装', group: '快速上手', route: {name: 'Install'}},
            {title: '按需导入', group: '快速上手', route: {name: 'Into'}},
            {
                title: '什么是im UI',
                group: '快速上手',
                route:{name: 'Introduce'}
            }
        ]
    }
]