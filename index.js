// console.log('Random Message generator')

// console.log('Let started')

// console.log('On develop')

const dataRource1 = [
    {
      1: 'The Road Ahead',
      2: 'Bill Gates',
      3: 1954
    },
    {
      1: 'Walter Isaacson',
      2: 'Steve Jobs',
      3: 7389
    },
    {
      1: 'Mockingjay: The Final Book of The Hunger Games',
      2: 'Suzanne Collins',
      3: 1245
    }
]

const dataRource2 = [
    {
      1: 'Wikipedia',
      2: '+10M',
      3: 1922
    },
    {
      1: 'Google',
      2: 'Over 4 billion',
      3: 4264
    },
    {
      1: 'Facebook',
      2: '2 billion',
      3: 1945
    }
]

const dataRource = [
    {
      1: 'christof',
      2: 12,
      3: 'developement'
    },
    {
        1: 'john',
        2: 56,
        3: 'developement'
    },
    {
        1: 'christof',
        2: 12,
        3: 'developement'
    }
]

const greet = ['Bonjour','Bonsoir','Salue','Hey','salam','Hi','Hello','Holla','yo','plesea']
const cname = ['steve jobs','Larry page','Mark zukeberg','john smith','linus makfield']



function MessageGenerator(){
  const mess = greet[parseInt(Math.random()*10)]
  const noms = dataRource[parseInt(Math.random()*2)][1]
  const ent_name =  dataRource2[parseInt(Math.random()*2)][1]
  const ent_date =  dataRource2[parseInt(Math.random()*2)][3]
  const ent_user =  dataRource2[parseInt(Math.random()*2)][2]
  const ent_creator = cname[parseInt(Math.random()*3)]
  
  return mess + ' ' + noms + ', ' + ent_name + ' a ete creer en ' + ent_date + ' par ' + ent_creator
}
console.log(MessageGenerator())


