const dataRource1 = [
    {book: '-Silicon valley-',author: 'Bill Gates',pages: 5543},
    {book: '-The Giant Story-',author: 'Steve Jobs',pages: 450},
    {book: '-Mockingjay: The Final Book of The Hunger Games-',author: 'Suzanne Collins',3: 1000},
    {book: '-Dev Strory-',author: 'Natan  Spenser',pages: 1245},
    {book: '-Quantum Innovation-',author: 'Dawn jonh',pages: 1245},
    {book: '-Loggin into dream-',author: 'Steve Hunter',pages: 1245},
    {book: '-From Nightmare to Light-',author: 'Harvey  Specter',pages: 3409},
    {book: '-Last Code-',author: 'Suzanne Collins',pages: 4590},
    {book: '-Servers-',author: 'Rey james',pages: 300},
    {book: '-Little Parametre-',author: 'Gounter  Collins',pages: 837}
]

const dataRource2 = [
    {Enterprise: 'Wikipedia',users: '+10M',Year: 1922},
    {Enterprise: 'Google',users: 'plus de 4 milliards',Year: 2004},
    {Enterprise: 'Facebook',users: '+30M',Year: 2011},
    {Enterprise: 'Pinterest',users: '+45M',Year: 1967},
    {Enterprise: 'Codingame',users: '+500M',Year: 1890},
    {Enterprise: 'GoInnovation',users: '+4M',Year: 1998},
    {Enterprise: 'Microsoft',users: '+23M',Year: 2015},
    {Enterprise: 'Amazon',users: '+33M',Year: 1945},
    {Enterprise: 'Alibaba',users: 'plus 64 milliards',Year: 2017},
    {Enterprise: 'Tesla',users: 'plus de 10 milliards',Year: 2003}
]

const dataRource = [
    {nom: 'Christof',age: 12,passion: 'Programmation'},
    {nom: 'John',age: 56,passion: 'Developement Web'},
    {nom: 'Christof',age: 12,passion: 'linnovation'},
    {nom: 'Emma',age: 12,passion: 'Ux Design'},
    {nom: 'James',age: 12,passion: 'Dev Mobile'},
    {nom: 'Noah',age: 12,passion: 'Informatique'},
    {nom: 'Amelia',age: 12,passion: 'Entreprenariat'},
    {nom: 'Olivia',age: 12,passion: 'Engenierie'},
    {nom: 'Geeks',age: 12,passion: 'Programmation Backend'},
    {nom: 'Thierry',age: 12,passion: 'Prog Frontend'}
]

const greet = ['Bonjour','Bonsoir','Salue','Hey','salam','Hi','Hello','Holla','yo','plesea']
const cname = ['Steve Jobs','Larry Page','Mark Zukeberg','Elon Musk','Jack Ma',
               'Xian Bing','Bill Gate','Curl yung','Liong Ben','Linus Torvalds']

function MessageGenerator() {
  const random = Math.floor(Math.random() * 9);
  const mess = greet[random];
  const noms = dataRource[random]["nom"];
  const ent_name = dataRource2[random]["Enterprise"];
  const ent_date = dataRource2[random]["Year"];
  const ent_user = dataRource2[random]["users"];
  const ent_creator = cname[random];
  const pass = dataRource[random]["passion"];
  const book = dataRource1[random]["book"];
  const author = dataRource1[random]["author"];
  const pages = dataRource1[random]["pages"];

  return mess + " "  + noms + ", " + ent_name + " a été créée en " + 
         ent_date + " par " + ent_creator + " et compte aujourd'hui " + 
         ent_user + " d'utilisateurs . Il a été conçu par des passionnés de|d' " + 
         pass + ". Vous retrouverez toute l'histoire dans le livre "+
         book + " de " + author + " qui est à moins "+ pages + " Pages."
}
console.log(MessageGenerator());
