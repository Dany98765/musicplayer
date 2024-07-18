// import React from "react";
// import SongCard from "./SongCard";

// export default function CountryCode(props) {
//   // state responsible for storing the api data inside an array
//   const [songData, setSongData] = React.useState([]);  
//   // state responsible for tracking the currently playing song
//   const [currentPlayingSong, setCurrentPlayingSong] = React.useState(null);
//   // state which tracks the input search
//   const [inputs, setInputs] = React.useState({
//     Search: "",
//   });
//   // credentials
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'eee5adfe58mshe48de5bf5ea83abp16240ejsn269106eacbb4',
//       'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//     }
//   };
//   // function responsible for tracking the input search text
//   function HandleChange(event) {
//     setInputs((prevInputs) => {
//       return {
//         ...prevInputs,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }

//   // function fetches whenever it button is clicked
//   function SearchSongs(event){
//     event.preventDefault()
//     fetch(`https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-country?country_code=${inputs.Search}&limit=50`,options)
//       .then(res => res.json())
//       .then(data => setSongData(data))
//   }

//   // mapping over the songData state to display the necessary info
//   let MappedData;
//   console.log(songData)
//   MappedData = songData.map((property) => {
//     return (
//       <SongCard
//         key={property.key}
//         id={property.key}
//         title={property.title}
//         subtitle={property.subtitle}
//         ringtone={property.ringtone}
//         currentPlayingSong={currentPlayingSong}
//         setCurrentPlayingSong={setCurrentPlayingSong} 
//       />
//     );
//   });
//   console.log(songData)
//   return (
//     <div>
//       <form className="song--country">
//         <label className="title-code">Enter your country's 2-letter code</label>
//         <input
//           type="text"
//           className="country-code-search"
//           onChange={HandleChange}
//           name="Search"
//           value={inputs.Search}
//         />
//         <input
//           type="submit"
//           className="country-code-submit"
//           placeholder="Search Famous Songs"
//           onClick={SearchSongs}
//           name="Search"
//         />
//         {MappedData}
//       </form>  
//     </div>
//   );
// }
import React from "react";
import SongCard from "./SongCard";

export default function CountryCode(props) {
  const [songData, setSongData] = React.useState([]);  
  const [currentPlayingSong, setCurrentPlayingSong] = React.useState(null);
  const [inputs, setInputs] = React.useState({
    Search: "",
  });

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eee5adfe58mshe48de5bf5ea83abp16240ejsn269106eacbb4',
      'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
  };

  function HandleChange(event) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [event.target.name]: event.target.value,
    }));
  }
  MappedData = songData.map((property) => {
    return (
      <SongCard
        key={property.key}
        id={property.key}
        title={property.title}
        subtitle={property.subtitle}
        ringtone={property.ringtone}
        currentPlayingSong={currentPlayingSong}
        setCurrentPlayingSong={setCurrentPlayingSong} 
      />
    );
  });
  function SearchSongs(event) {
    event.preventDefault();
    fetch(`https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-country?country_code=${inputs.Search}&limit=50`, options)
      .then(res => res.json())
      .then(data => {
        // Verify the structure of the API response
        // For example, if data is an object with a 'songs' property:
        // setSongData(data.songs);
        setSongData(data); // Adjust as needed
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Handle the error (e.g., display an error message)
      });
  }

  // Rest of your code...
 
  return (
    <div>
      <form className="song--country">
        <label className="title-code">Enter your country's 2-letter code</label>
        <input
          type="text"
          className="country-code-search"
          onChange={HandleChange}
          name="Search"
          value={inputs.Search}
        />
        <input
          type="submit"
          className="country-code-submit"
          placeholder="Search Famous Songs"
          onClick={SearchSongs}
          name="Search"
        />
        {/* Render the mapped data */}
        {MappedData}
      </form>
    </div>
  );
}
