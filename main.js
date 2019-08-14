let teams = [
  {
    name:"Titans",
    img:"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Texans",
    img:"https://pbs.twimg.com/profile_images/664402312996200448/5W2Lusba_400x400.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Jaguars",
    img:"https://pbs.twimg.com/profile_images/664403706822197248/upeZoABV_400x400.png",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Colts",
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/bb/69/98/bb69980d-5056-db6a-8b2b-9288c6e68a5c/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chiefs",
    img:"https://pbs.twimg.com/profile_images/686564181294866432/rVDkZsSS_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chargers",
    img:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_yt3jycgvxti01.png",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Raiders",
    img:"https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/kxnsdxxdhtwtpxvlcewy",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Broncos",
    img:"https://pbs.twimg.com/profile_images/736779046785290240/xhsCcyA-_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Rams",
    img:"https://i.pinimg.com/originals/88/79/a4/8879a4f189033c8f6615d10b895b0046.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Cardinals",
    img:"https://pbs.twimg.com/profile_images/796560374254288896/mtgjLctY_400x400.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"49ers",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/23/logo.png",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Panthers",
    img:"https://apprecs.org/ios/images/app-icons/256/3b/462021947.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Falcons",
    img:"https://b3h2.scene7.com/is/image/BedBathandBeyond/147165763339468p?$imagePLP$&wid=256&hei=256",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Saints",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/30/logo.png",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Bucs",
    img:"https://pbs.twimg.com/profile_images/678197372829106176/TsegQdsp_400x400.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  }
];

const printToDom = (stringToPrint,divId) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint
}

const poBtn = () =>{
  let teamBtn = `<button type="button" id="playoffs" class="btn btn-success">Playoffs</button>`;
  printToDom(teamBtn,'postSeason')
};
poBtn();

const nflteamsa  = () => {
  let fTeams = "";
  teams.forEach((team) => {
  fTeams += `<div class="card" style="width: 18rem;">`;
  fTeams += `<img src="${team.img}" class="card-img-top">`;
  fTeams += `<div class="card-body">`;
  fTeams += `<h1 class="card-title text-center">${team.name}</h1>`;
  fTeams += `<p class="card-text text-center">${team.conference}</p>`;
  fTeams += `<p class="div text-center">${team.division} </p>`;
  fTeams += `</div>`;
  fTeams +=   `</div>`;
})
// makeBtns();
printToDom(fTeams,'allTeams');
};
nflteamsa();


const nflteams  = () => {
  let allTeams = "";
  let playoffTeams = teams.filter(team => team.madePlayoffsLastSeason === true);
  playoffTeams.forEach((plays) => { 
    console.log(plays);
  allTeams += `<div class="card" style="width: 18rem;">`;
  allTeams += `<img src="${plays.img}" class="card-img-top centered">`;
  allTeams += `<div class="card-body">`;
  allTeams += `<h1 class="card-title text-center">${plays.name}</h1>`;
  allTeams += `<p class="card-text text-center">${plays.conference}</p>`;
  allTeams += `<p class="div text-center">${plays.division} </p>`;
  allTeams += `</div>`;
  allTeams +=   `</div>`;
  })
  $("#allTeams").hide();
  printToDom(allTeams,'here');
};
// nflteams();

const btnEvent = () => {
  $("#playoffs").on('click',nflteams);
};
btnEvent();