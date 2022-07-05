import { faL } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4} from 'uuid'

function chillhop()
{
    return [
        {
            name: "Low Tide ",
            artist: "oddfish, cocabona ",
            cover: "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: [ '#BA4A46', '#FDF0DD'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9363'
        },

        {
            name: "Lagoons",
            artist: "Strehlow",
            cover: 'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',

            id: uuidv4(),
            active:false,
            color: [ '#BA4A46', '#FDF0DD'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8266'


        },

        {
            name: 'Central Coast',
            artist: 'Tamarind',
            cover: 'https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: [ '#BA4A46', '#FDF0DD'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9364'
        },
        {
            name: 'LuvnYou',
            artist:'Chillhop Music',
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: [ '#BA4A46', '#FDF0DD'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=21784'
        },

        {
            name: 'Be Here Now',
            artist: 'Chillhop Music',
            cover: 'https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: [ '#BA4A46', '#FDF0DD'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=21782'
        },
        {
            
        }
    ]
}

export default chillhop