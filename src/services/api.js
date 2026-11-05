let parts = [
  { id: 1, name: "Тормозные колодки", article: "TR-100", price: 25, quantity: 10 },
  { id: 2, name: "Масляный фильтр", article: "MF-500", price: 8, quantity: 25 },
  { id: 3, name: "Свеча зажигания", article: "SP-123", price: 15, quantity: 50 },
  { id: 4, name: "Амортизатор", article: "AM-700", price: 107, quantity: 8 },
  { id: 5, name: "Ремень ГРМ", article: "TB-200", price: 235, quantity: 15 },
  { id: 6, name: "Аккумулятор", article: "AK-900", price: 340, quantity: 5 },
];

export const partsAPI = {
  fetchParts: () => new Promise((res) => setTimeout(() => res([...parts]), 200)),
  addPart: (part) => new Promise((res) => {
    const maxId = parts.length ? Math.max(...parts.map((p) => p.id)) : 0;
    const newPart = { ...part, id: maxId + 1 };
    parts = [...parts, newPart];
    res(newPart);
  }),
  deletePart: (id) => new Promise((res) => {
    parts = parts.filter((p) => p.id !== id);
    res(id);
  }),
  isArticleUnique: (article) => !parts.some((p) => p.article.toLowerCase() === article.toLowerCase())
};

export const authAPI = {
  login: (username, password) => new Promise((res, rej) => {
    if (username === 'admin' && password === '1234') res({ name: username });
    else rej(new Error("Неверный логин или пароль"));
  })
};
