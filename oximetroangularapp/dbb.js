/**
 * This is a the main database file. It's meant to be mounted over.
 */
 module.exports = () => ({
  medidas: [{ id: 1, nome: 'Thomas C Melachos', medida: '88', dataatual: '01/05/2022'  }],
  comments: [{ id: 1, body: 'some comment', postId: 1 }],
  profile: { name: 'typicode' },
});

