const studentData = [
  {
    name: "Lucas",
    lastName: "Martinez",
    dni: 12345678,
    birthDate: "2004-02-15",
    email: "lucas.martinez@example.com",
    phone: "+54 9 11 2345 6789",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740"
  },
  {
    name: "Camila",
    lastName: "Garcia",
    dni: 23456789,
    birthDate: "2003-07-20",
    email: "camila.garcia@example.com",
    phone: "+54 9 11 3456 7890",
    image: "https://previews.123rf.com/images/atthameeni/atthameeni1210/atthameeni121000374/16055507-dibujos-animados-ni%C3%B1a-feliz-riendo-ilustraci%C3%B3n-dibujados-a-mano.jpg"
  },
  {
    name: "Mateo",
    lastName: "Lopez",
    dni: 34567890,
    birthDate: "2005-01-10",
    email: "mateo.lopez@example.com",
    phone: "+54 9 11 4567 8901",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-musculo-mostrando_29190-6480.jpg?w=360"
  },
  {
    name: "Abril",
    lastName: "Fernandez",
    dni: 45678901,
    birthDate: "2002-05-28",
    email: "abril.fernandez@example.com",
    phone: "+54 9 11 5678 9012",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740"
  },
  {
    name: "Santiago",
    lastName: "Gonzalez",
    dni: 56789012,
    birthDate: "2004-10-31",
    email: "santiago.gonzalez@example.com",
    phone: "+54 9 11 6789 0123",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740"
  },
  {
    name: "Agustina",
    lastName: "Rodriguez",
    dni: 67890123,
    birthDate: "2003-04-05",
    email: "agustina.rodriguez@example.com",
    phone: "+54 9 11 7890 1234",
    image: "https://previews.123rf.com/images/atthameeni/atthameeni1210/atthameeni121000374/16055507-dibujos-animados-ni%C3%B1a-feliz-riendo-ilustraci%C3%B3n-dibujados-a-mano.jpg"
  },
    {
    name: "Juan",
    lastName: "Perez",
    dni: 78901234,
    birthDate: "2002-12-12",
    image:"https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-manos_353337-803.jpg?w=740",
    email: "juanperez@gmail.com",
    phone: "+5491122334455"
  },
  {
    name: "Valentina",
    lastName: "Gomez",
    dni: 89012345,
    birthDate: "2004-09-22",
    image:"https://i.pinimg.com/564x/f7/b9/ff/f7b9ff4ee44530083fd7bbce6d0d45c0.jpg",
    email: "valentinagomez@hotmail.com",
    phone: "+5491133445566"
  },
  {
    name: "Nicolas",
    lastName: "Hernandez",
    dni: 90123456,
    birthDate: "2003-03-17",
    image:"https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740",
    email: "nicolashernandez@yahoo.com",
    phone: "+5491144556677"
  },
  {
    name: "Belen",
    lastName: "Alvarez",
    dni: 12345678,
    birthDate: "2005-06-01",
    image:"https://i.pinimg.com/564x/f7/b9/ff/f7b9ff4ee44530083fd7bbce6d0d45c0.jpg",
    email: "belenalvarez@gmail.com",
    phone: "+5491155667788"
  },
  {
    name: "Martin",
    lastName: "Sanchez",
    dni: 23456789,
    birthDate: "2002-11-18",
    image:"https://img.freepik.com/vector-premium/presentacion-linda-historieta-muchacho-lindo_43633-2777.jpg?w=740",
    email: "martinsanchez@hotmail.com",
    phone: "+5491166778899"
  },
  {
    name: "Marina",
    lastName: "Diaz",
    dni: 34567890,
    birthDate: "2004-08-08",
    image:"https://i.pinimg.com/564x/f7/b9/ff/f7b9ff4ee44530083fd7bbce6d0d45c0.jpg",
    email: "marinadiaz@yahoo.com",
    phone: "+5491177889900"
  },
  {
    name: "Tomas",
    lastName: "Martinez",
    dni: 45678901,
    birthDate: "2003-02-25",
    image:"https://img.freepik.com/vector-premium/presentacion-linda-historieta-muchacho-lindo_43633-2777.jpg?w=740",
    email: "asdtomas.martinez@gmail.com",
    phone: "+5491188990011"
  },
  {
    name: "Lucas",
    lastName: "Martinez",
    dni: 12345678,
    birthDate: "2004-02-15",
    email: "sadslucas.martinez@example.com",
    phone: "+54 9 11 2345 6789",
    image: "https://img.freepik.com/vector-premium/presentacion-linda-historieta-muchacho-lindo_43633-2777.jpg?w=740"
  },
  {
    name: "Camila",
    lastName: "Garcia",
    dni: 23456789,
    birthDate: "2003-07-20",
    email: "sadcamila.garcia@example.com",
    phone: "+54 9 11 3456 7890",
    image: "https://previews.123rf.com/images/irwanjos/irwanjos1701/irwanjos170100016/70900642-ilustraci%C3%B3n-vectorial-de-ni%C3%B1a-feliz-con-una-mochila-de-ir-a-la-escuela.jpg"
  },
  {
    name: "Mateo",
    lastName: "Lopez",
    dni: 34567890,
    birthDate: "2005-01-10",
    email: "asdmateo.lopez@example.com",
    phone: "+54 9 11 4567 8901",
    image: "https://img.freepik.com/vector-premium/nino-artista-dibujos-animados_33070-2272.jpg?w=740"
  },
  {
    name: "Abril",
    lastName: "Fernandez",
    dni: 45678901,
    birthDate: "2002-05-28",
    email: "asdabril.fernandez@example.com",
    phone: "+54 9 11 5678 9012",
    image: "https://previews.123rf.com/images/irwanjos/irwanjos1701/irwanjos170100016/70900642-ilustraci%C3%B3n-vectorial-de-ni%C3%B1a-feliz-con-una-mochila-de-ir-a-la-escuela.jpg"
  },
  {
    name: "Santiago",
    lastName: "Gonzalez",
    dni: 56789012,
    birthDate: "2004-10-31",
    email: "asdsantiago.gonzalez@example.com",
    phone: "+54 9 11 6789 0123",
    image: "https://img.freepik.com/vector-premium/nino-artista-dibujos-animados_33070-2272.jpg?w=740"
  },
  {
    name: "Agustina",
    lastName: "Rodriguez",
    dni: 67890123,
    birthDate: "2003-04-05",
    email: "asdagustina.rodriguez@example.com",
    phone: "+54 9 11 7890 1234",
    image: "https://img.freepik.com/vector-premium/nino-artista-dibujos-animados_33070-2272.jpg?w=740"
  },
    {
    name: "Juan",
    lastName: "Perez",
    dni: 78901234,
    birthDate: "2002-12-12",
    image:"https://img.freepik.com/vector-premium/nino-artista-dibujos-animados_33070-2272.jpg?w=740",
    email: "asdjuanperez@gmail.com",
    phone: "+5491122334455"
  },
  {
    name: "Valentina",
    lastName: "Gomez",
    dni: 89012345,
    birthDate: "2004-09-22",
    image:"https://us.123rf.com/450wm/bubululu/bubululu1701/bubululu170100146/70662007-ni%C3%B1a-con-mochila-de-dibujos-animados.jpg",
    email: "asdvalentinagomez@hotmail.com",
    phone: "+5491133445566"
  },
  {
    name: "Nicolas",
    lastName: "Hernandez",
    dni: 90123456,
    birthDate: "2003-03-17",
    image:"https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740",
    email: "asdnicolashernandez@yahoo.com",
    phone: "+5491144556677"
  },
  {
    name: "Belen",
    lastName: "Alvarez",
    dni: 12345678,
    birthDate: "2005-06-01",
    image:"https://us.123rf.com/450wm/bubululu/bubululu1701/bubululu170100146/70662007-ni%C3%B1a-con-mochila-de-dibujos-animados.jpg",
    email: "asdbelenalvarez@gmail.com",
    phone: "+5491155667788"
  },
  {
    name: "Martin",
    lastName: "Sanchez",
    dni: 23456789,
    birthDate: "2002-11-18",
    image:"https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740",
    email: "asdmartinsanchez@hotmail.com",
    phone: "+5491166778899"
  },
  {
    name: "Marina",
    lastName: "Diaz",
    dni: 34567890,
    birthDate: "2004-08-08",
    image:"https://us.123rf.com/450wm/bubululu/bubululu1701/bubululu170100146/70662007-ni%C3%B1a-con-mochila-de-dibujos-animados.jpg",
    email: "asdmarinadiaz@yahoo.com",
    phone: "+5491177889900"
  },
  {
    name: "Tomas",
    lastName: "Martinez",
    dni: 45678901,
    birthDate: "2003-02-25",
    image:"https://previews.123rf.com/images/lawangdesign/lawangdesign1911/lawangdesign191100040/136602493-cute-dibujos-animados-de-ni%C3%B1o-feliz-sobre-un-fondo-blanco.jpg",
    email: "tomas.martiasdnez@gmail.com",
    phone: "+5491188990011"
  },
  {
    name: "Lucas",
    lastName: "Martinez",
    dni: 12345678,
    birthDate: "2004-02-15",
    email: "lucas.martisadnez@example.com",
    phone: "+54 9 11 2345 6789",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740"
  },
  {
    name: "Camila",
    lastName: "Garcia",
    dni: 23456789,
    birthDate: "2003-07-20",
    email: "camila.garsadcia@example.com",
    phone: "+54 9 11 3456 7890",
    image: "https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740"
  },
  {
    name: "Mateo",
    lastName: "Lopez",
    dni: 34567890,
    birthDate: "2005-01-10",
    email: "mateo.lopsadez@example.com",
    phone: "+54 9 11 4567 8901",
    image: "https://previews.123rf.com/images/lawangdesign/lawangdesign1911/lawangdesign191100040/136602493-cute-dibujos-animados-de-ni%C3%B1o-feliz-sobre-un-fondo-blanco.jpg"
  },
  {
    name: "Abril",
    lastName: "Fernandez",
    dni: 45678901,
    birthDate: "2002-05-28",
    email: "abril.fernandsadez@example.com",
    phone: "+54 9 11 5678 9012",
    image: "https://media.istockphoto.com/vectors/happy-girl-cartoon-with-backpack-vector-id696502922"
  },
  {
    name: "Santiago",
    lastName: "Gonzalez",
    dni: 56789012,
    birthDate: "2004-10-31",
    email: "santiago.gonzasadlez@example.com",
    phone: "+54 9 11 6789 0123",
    image: "https://previews.123rf.com/images/lawangdesign/lawangdesign1911/lawangdesign191100040/136602493-cute-dibujos-animados-de-ni%C3%B1o-feliz-sobre-un-fondo-blanco.jpg"
  },
  {
    name: "Agustina",
    lastName: "Rodriguez",
    dni: 67890123,
    birthDate: "2003-04-05",
    email: "agustina.rodrigusadez@example.com",
    phone: "+54 9 11 7890 1234",
    image: "https://media.istockphoto.com/vectors/happy-girl-cartoon-with-backpack-vector-id696502922"
  },
    {
    name: "Juan",
    lastName: "Perez",
    dni: 78901234,
    birthDate: "2002-12-12",
    image:"https://img.freepik.com/vector-premium/nino-feliz-dibujos-animados-levantando-mano_353337-793.jpg?w=740",
    email: "juanpeasdrez@gmail.com",
    phone: "+5491122334455"
  },
  {
    name: "Valentina",
    lastName: "Gomez",
    dni: 89012345,
    birthDate: "2004-09-22",
    image:"https://media.istockphoto.com/vectors/happy-girl-cartoon-with-backpack-vector-id696502922",
    email: "valentinagoasdmez@hotmail.com",
    phone: "+5491133445566"
  }
   
]

module.exports = studentData