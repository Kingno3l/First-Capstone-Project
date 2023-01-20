const bars = document.querySelector('.icon');
const tray = document.querySelector('#tray');

bars.addEventListener('click', () => {
  tray.classList.toggle('show');
});

tray.addEventListener('click', () => {
  tray.classList.remove('show');
});

const speakers = [
  {
    speaker: 'Don Eugene',
    title: 'Life CoachLife Coach | Self-employed',
    desc: `With 10 years of experience working in the industry, providing rare values to his customers`,
    image: 'images/don.jpeg',
    alt: 'picture of don',
  },

  {
    speaker: 'peter enenche',
    title: 'senior engineer turing',
    desc: `peter enenche is a senior software engineer for turing inc. and an andriod developer.`,
    image: 'images/Unknown-2.jpg',
    alt: 'picture of peter enenche',
  },

  {
    speaker: 'Offia Mike',
    title: 'works at Sapin',
    desc: 'Great team lead.',
    image: 'images/Offia-Michael-IT-and-Media.jpg.webp',
    alt: 'picture of Mike',

  },

  {
    speaker: 'Olarinde Owoniyi',
    title: 'ceo and founder  of aptlearn',
    desc: `CEO of VIZMO Inc and LAR Global resource`,
    image: 'images/images-2.jpeg',
    alt: 'picture of Olarinde Owoniyi',
  },

  {
    speaker: 'Celina Unogwu',
    title: 'CUVA Vision Party',
    desc: `team Lead and director CUVA vision board party`,
    image: 'images/CELINA-UNOGWU-Advisory-Board.jpg.webp',
    alt: 'picture of celina',
  },

  {
    speaker: 'Loretta Ovrere',
    title: 'co founder wallpaper world foundation',
    desc: `MD wallpaper world`,
    image: 'images/images.jpeg',
    alt: 'picture of Loretta Ovrere',
  },
];

const test = speakers.slice(0, 2);

const wrapper = document.querySelector('.wrapper');
const more = document.querySelector('.more');
const sponsors = document.querySelector('.sponsors');
const footer = document.querySelector('#footer');

function wrap(main, array) {
  const take = `
        <div class="img">
            <img src=${array.image} alt=${array.alt} srcset="">
            <div class="backdrop">
              <img src="images/chess2.webp" alt="" srcset="">
            </div>
        </div>
        <div class="texts">
            <h3>${array.speaker}</h3>
            <h4>${array.title}</h4>
            <p>${array.desc}</p>
        </div>
        
    
  `;

  const each = document.createElement('div');
  each.classList.add('each');
  each.innerHTML = take;
  main.appendChild(each);
}

window.addEventListener('load', () => {
  if (window.innerWidth >= 768) {
    speakers.map((speaker) => (
      wrap(wrapper, speaker)
    ));
  } else {
    test.map((test) => (
      wrap(wrapper, test)
    ));
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    wrapper.innerHTML = '';
    test.map((test) => (
      wrap(wrapper, test)
    ));
    sponsors.style.display = 'none';
    footer.style.display = 'none';
    more.style.display = 'block';
  } else {
    wrapper.innerHTML = '';
    speakers.map((speaker) => (
      wrap(wrapper, speaker)
    ));
    more.style.display = 'none';
    sponsors.style.display = 'block';
    footer.style.display = 'block';
  }
});

more.addEventListener('click', () => {
  wrapper.innerHTML = '';
  more.style.display = 'none';
  sponsors.style.display = 'block';
  footer.style.display = 'block';
  speakers.map((speaker) => (
    wrap(wrapper, speaker)
  ));
});
