interface Imenu {
    id: number;
    name: string;
    path: string;
    icon: string;
    order: number;
    id_padre: number;
}
declare function crearMenu(data: Array<any>, last_id: number, id_padre: number): Imenu[];
export { crearMenu };
//# sourceMappingURL=menu_resources.d.ts.map