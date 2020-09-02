import React from "react";
import App from "./App";
import {render, fireEvent, findByAltText, getAllByTestId} from "@testing-library/react";
import {fetchMissions => mockFetchMissions} from './api/fetchMissions';
import { unstable_renderSubtreeIntoContainer } from "react-dom";

jest.mock{"./api/fetchMissions"}
test(" App fetches missions data from the api and renders it", async () => {
    //ARRANGE
    mockFetchMissions.mockResolvedValueOnce(data);
    const {findByText,getByText, getAllByTestId} = render{<App/>};
    const button = getByText(/get data/i);

    //ACT
    // click the "get data" button
    fireEvent.click{button};
    //test asyncronous behavior
    //drop async in test
    await findByText(/we are fetching data/i);

    //ASSERT
    //Component waits for the API, then renders the returned
    //use the waitFor function to wait to the API call
    await waitFor(()=>{
        expect(getAllByTestId(/misson/i)).toHaveLength(3);
        //sanity check and make sure 4 doesn't pass
    })

    
});


// use findBy when doing async and await

//TEACHERS NOTES/////


// import React from "react";
// import App from "./App";
// import {render, fireEvent, waitFor} from "@testing-library/react";
// import {fetchMissions as mockFetchMissions} from './api/fetchMissions';
// jest.mock("./api/fetchMissions");
// test("App fetches missions data from the api and renders it", async () => {
//     // Arrange
//     mockFetchMissions.mockResolvedValueOnce(missions);
//     const {findByText, getByRole, getAllByTestId} = render(<App/>);
//     const button = getByRole('button', {name: /get data/i}); // find button with text "Get data", case insensitive
//     // Act: click the "Get Data" button
//     fireEvent.click(button);
//     await findByText(/we are fetching data/i);
//     // Assert
//     // Component waits for api, then render that is returned
//     // use the waitFor function to wait for the API call to resolve
//     await waitFor(() => {
//         expect(getAllByTestId(/mission/i)).toHaveLength(3);
//     })
//     // Could also do:
//     // await wait();
//     // expect(getAllByTestId(/mission/i)).toHaveLength(3);
// });
// const missions = {
//     data: [
//     {
//        "mission_name":"Orbcomm OG2",
//        "mission_id":"CE91D46",
//        "manufacturers":[
//           "Sierra Nevada Corporation"
//        ],
//        "payload_ids":[
//           "Orbcomm-OG2",
//           "Orbcomm-OG2-M1",
//           "Orbcomm-OG2-M2"
//        ],
//        "wikipedia":"https://en.wikipedia.org/wiki/Orbcomm_(satellite)#Orbcomm-OG2",
//        "website":"https://www.orbcomm.com/",
//        "twitter":"https://twitter.com/orbcomm_inc",
//        "description":"Orbcomm Generation 2 (OG2) second-generation satellites are intended to supplement and eventually replace the current first generation constellation. Eighteen satellites were ordered by 2008—nominally intended to be launched in three groups of six during 2010–2014—and by 2015 have all been launched, on three flights. Orbcomm has options for a further thirty OG2 spacecraft. The satellites were launched by SpaceX on the Falcon 9 launch system. Originally, they were to launch on the smaller Falcon 1e rocket."
//     },
//     {
//        "mission_name":"ABS",
//        "mission_id":"2CF444A",
//        "manufacturers":[
//           "Boeing"
//        ],
//        "payload_ids":[
//           "ABS-3A",
//           "ABS-3B"
//        ],
//        "wikipedia":"https://en.wikipedia.org/wiki/ABS_(satellite_operator)",
//        "website":"http://www.absatellite.com/",
//        "twitter":null,
//        "description":"ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world's population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States."
//     },
//     {
//        "mission_name":"Eutelsat",
//        "mission_id":"F7709F2",
//        "manufacturers":[
//           "Boeing"
//        ],
//        "payload_ids":[
//           "Eutelsat 115 West B",
//           "Eutelsat 117 West B"
//        ],
//        "wikipedia":"https://en.wikipedia.org/wiki/Eutelsat",
//        "website":"https://www.eutelsat.com/en/home.html#",
//        "twitter":"https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//        "description":"Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues."
//     }
//  ]};