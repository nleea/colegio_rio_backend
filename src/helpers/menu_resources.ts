interface Imenu {
  id: number;
  name: string;
  path: string;
  icon: string;
  order: number;
  id_padre: number;
}

const moduleValues = [
  {
    name: "prueba",
    path: "prueba",
    icon: "AdminPanel",
    order: 1,
    id_padre: 0,
    items: [
      {
        name: "pruebawww",
        path: "pruebawww",
        icon: "AdminPanel",
        order: 1,
      },
    ],
  },
  {
    name: "pruebagg",
    path: "pruebagg",
    icon: "AdminPanel",
    order: 1,
    id_padre: 0,
  },
];

const lista: Imenu[] = [];

function crearMenu(data: Array<any>, last_id: number, id_padre: number) {
  let id_last_resources = last_id;

  for (let index = 0; index < data.length; index++) {
    if (data[index].id_padre !== 0) {
      lista.push({
        icon: data[index].icon,
        id_padre: data[index].id_padre ? data[index].id_padre : id_padre,
        name: data[index].name,
        order: data[index].order,
        path: data[index].path,
        id: lista.length ? lista[lista.length - 1].id + 1 : last_id,
      });
    } else {
      const lastId =
        lista.length === 0 ? last_id : lista[lista.length - 1].id + 1;

      lista.push({
        icon: data[index].icon,
        id_padre: data[index].id_padre,
        name: data[index].name,
        order: data[index].order,
        path: data[index].path,
        id: lastId,
      });
    }
    id_last_resources += 1;

    if ("items" in data[index]) {
      crearMenu(
        data[index].items,
        id_last_resources,
        lista[lista.length - 1].id
      );
    }
  }
  return lista;
}

export { crearMenu };
