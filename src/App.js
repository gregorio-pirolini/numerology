import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { letters } from "./letters";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

//  ######   ### ###  ##########   #######  ######    #####   ###       #####    #####   ### ###
//  #######  ### ###  ###########  #######  #######  #######  ###      #######  #######  ### ###
//  #######  ### ###  ###########  #######  #######  #######  ###      #######  #######  ### ###
//  ### ###  ### ###  ### ### ###  ###      ### ###  ### ###  ###      ### ###  ### ###  ### ###
//  ### ###  ### ###  ### ### ###  #######  #######  ### ###  ###      ### ###  ###      #######
//  ### ###  ### ###  ### ### ###  #######  ######   ### ###  ###      ### ###  #######  #######
//  ### ###  ### ###  ### ### ###  #######  #######  ### ###  ###      ### ###  #######   #####
//  ### ###  ### ###  ### ### ###  ###      ### ###  ### ###  ###      ### ###  ### ###    ###
//  ### ###  #######  ### ### ###  #######  ### ###  #######  #######  #######  #######    ###
//  ### ###  #######  ### ### ###  #######  ### ###  #######  #######  #######  #######    ###
//  ### ###   #####   ### ### ###  #######  ### ###   #####   #######   #####    ######    ###

function App() {
  //                    ##  ##  ##
  //                        ##  ##
  //     #####   ## ##  ##  ##  ##   #####
  //    ##   ##  ###    ##  ##  ##  ##   ##
  //    ##   ##  ##     ##  ##  ##  #######
  //    ##   ##  ##     ##  ##  ##  ##
  //     ######  ##     ##  ##  ##   ######
  //         ##
  //    ######

  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [number3, setNumber3] = useState(3);
  const [number4, setNumber4] = useState(4);
  const [number5, setNumber5] = useState(5);
  const [number6, setNumber6] = useState(6);
  const [number7, setNumber7] = useState(7);
  const [number8, setNumber8] = useState(8);
  const [number9, setNumber9] = useState(9);

  //    ###  ##                   ##
  //   ##                         ##                     ### ##
  //  ####   ##  ## ##   #####   ####   #####    #####   ## # ##   #####
  //   ##    ##  ###    ##        ##    ##  ##       ##  ## # ##  ##   ##
  //   ##    ##  ##      #####    ##    ##  ##   ######  ## # ##  #######
  //   ##    ##  ##          ##   ##    ##  ##  ##   ##  ## # ##  ##
  //   ##    ##  ##      #####     ###  ##  ##   ######  ## # ##   ######
  //
  //

  const [firstName, setFirstName] = useState("");
  const [firstNameNumbersAll, setFirstNameNumbersAll] = useState("");
  const [firstNameNumbersC, setFirstNameNumbersC] = useState("");
  const [firstNameNumbersV, setFirstNameNumbersV] = useState("");

  //  ##                     ##
  //  ##                     ##                     ### ##
  //  ##   #####    #####   ####   #####    #####   ## # ##   #####
  //  ##       ##  ##        ##    ##  ##       ##  ## # ##  ##   ##
  //  ##   ######   #####    ##    ##  ##   ######  ## # ##  #######
  //  ##  ##   ##       ##   ##    ##  ##  ##   ##  ## # ##  ##
  //  ##   ######   #####     ###  ##  ##   ######  ## # ##   ######
  //
  //
  const [lastName, setLastName] = useState("");
  const [lastNameNumbersAll, setLastNameNumbersAll] = useState("");
  const [lastNameNumbersC, setLastNameNumbersC] = useState("");
  const [lastNameNumbersV, setLastNameNumbersV] = useState("");

  //
  //                   ### ##
  //  #####    #####   ## # ##   #####
  //  ##  ##       ##  ## # ##  ##   ##
  //  ##  ##   ######  ## # ##  #######
  //  ##  ##  ##   ##  ## # ##  ##
  //  ##  ##   ######  ## # ##   ######
  //
  //

  const [name, setName] = useState("");
  const [nameNumbersAll, setNameNumbersAll] = useState("");
  const [nameNumbersC, setNameNumbersC] = useState("");
  const [nameNumbersV, setNameNumbersV] = useState("");

  const [expression, setExpression] = useState("");
  const [intime, setIntime] = useState("");
  const [realisation, setRealisation] = useState("");

  //  ######             ##                              ###        ######   ##          ##    ##
  //  ##   ##            ##                             ##          ##   ##              ##    ##
  //  ##   ##   #####   ####    #####          #####   ####         ##   ##  ##  ## ##  ####   ######
  //  ##   ##       ##   ##    ##   ##        ##   ##   ##          ######   ##  ###     ##    ##   ##
  //  ##   ##   ######   ##    #######        ##   ##   ##          ##   ##  ##  ##      ##    ##   ##
  //  ##   ##  ##   ##   ##    ##             ##   ##   ##          ##   ##  ##  ##      ##    ##   ##
  //  ######    ######    ###   ######         #####    ##          ######   ##  ##       ###  ##   ##
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cheminDeVie, setCheminDeVie] = useState("");

  useEffect(() => {
    setCheminDeVie(() => calculateCheminDeVie());
  }, [date]);

  useEffect(() => {
    setFirstNameNumbersAll(() => nameToNumbersAll("first"));
    setFirstNameNumbersC(() => nameToNumbersC("first"));
    setFirstNameNumbersV(() => nameToNumbersV("first"));

    setLastNameNumbersAll(() => nameToNumbersAll("last"));
    setLastNameNumbersC(() => nameToNumbersC("last"));
    setLastNameNumbersV(() => nameToNumbersV("last"));

    setName(() => firstName + " " + lastName);
  }, [lastName, firstName]);

  useEffect(() => {
    setNameNumbersAll(() => firstNameNumbersAll + " " + lastNameNumbersAll);
    setNameNumbersC(() => firstNameNumbersC + " " + lastNameNumbersC);
    setNameNumbersV(() => firstNameNumbersV + " " + lastNameNumbersV);
  }, [name]);

  useEffect(() => {
    setExpression(() => calculateAll("expression"));
    setIntime(() => calculateAll("intime"));
    setRealisation(() => calculateAll("realisation"));
    setNumber1(() => grille(1));
    setNumber2(() => grille(2));
    setNumber3(() => grille(3));
    setNumber4(() => grille(4));
    setNumber5(() => grille(5));
    setNumber6(() => grille(6));
    setNumber7(() => grille(7));
    setNumber8(() => grille(8));
    setNumber9(() => grille(9));
  }, [nameNumbersAll]);

  const handleChangeFirstName = (event) => {
    console.log("change");
    setFirstName(event);
  };

  const handleChangeDate = (event) => {
    console.log("change");
    setDate(event);
  };

  const handleChangeLastName = (event) => {
    console.log("change");
    setLastName(event);
  };
  const grille = (nb) => {
    let x = nameNumbersAll.split(nb).length - 1;
    console.log("grille x.............." + nameNumbersAll + "-- " + nb);
    console.log(x);
    if (x == 0) {
      x = "-";
    }
    return x;
  };

  const nameToNumbersAll = (firstOrLast) => {
    let arrName;
    firstOrLast == "first"
      ? (arrName = firstName.split(""))
      : (arrName = lastName.split(""));
    let str = "";
    for (let i = 0; i < arrName.length; i++) {
      let x = arrName[i];
      if (x == " ") {
        continue;
      }
      str += letters[x][0];
    }

    return str;
  };
  const nameToNumbersC = (firstOrLast) => {
    let arrName;
    firstOrLast == "first"
      ? (arrName = firstName.split(""))
      : (arrName = lastName.split(""));
    let str = "";
    for (let i = 0; i < arrName.length; i++) {
      let x = arrName[i];
      if (x == " ") {
        continue;
      }
      letters[x][1] == "c" ? (str += letters[x][0]) : (str += " ");
    }

    return str;
  };
  const nameToNumbersV = (firstOrLast) => {
    let arrName;
    firstOrLast == "first"
      ? (arrName = firstName.split(""))
      : (arrName = lastName.split(""));
    let str = "";
    for (let i = 0; i < arrName.length; i++) {
      let x = arrName[i];
      if (x == " ") {
        continue;
      }
      letters[x][1] == "v" ? (str += letters[x][0]) : (str += " ");
    }

    return str;
  };

  const calculateCheminDeVie = () => {
    let str = date;

    if (str.length < 1) return "-"; //no number to bring yet
    let strToArr = []; //make array
    let onlyNumbersStr = []; //keeps only numbers
    let onlyNumbers = []; //make str to numbers
    console.log("onlyNumbers");
    console.log(onlyNumbers);

    let reducer = "";

    do {
      console.log("do &&&&&&&&&&&&&&& str:");
      console.log(str);
      strToArr = str.toString().split(""); //make array
      onlyNumbersStr = strToArr.filter(Number); //keeps only numbers
      onlyNumbers = onlyNumbersStr.map(Number); //make str to numbers
      console.log("onlyNumbers");
      console.log(onlyNumbers);

      reducer = (accumulator, curr) => accumulator + curr;
      str = onlyNumbers.reduce(reducer);
      console.log("str reduced");
      console.log(str);
      console.log(typeof str);
    } while (str > 9);

    return str;
  };

  const calculateAll = (nb) => {
    console.log("nb: " + nb);
    let str;
    if (nb == "expression") {
      str = nameNumbersAll.replaceAll(" ", "");
    } else if (nb == "intime") {
      str = nameNumbersV.replaceAll(" ", "");
    } else if (nb == "realisation") {
      str = nameNumbersC.replaceAll(" ", "");
    }
    console.log("str:");
    console.log(str);

    if (str.length < 1) return "-"; //no number to bring yet
    let strToArr = []; //make array
    let onlyNumbersStr = []; //keeps only numbers
    let onlyNumbers = []; //make str to numbers
    console.log("onlyNumbers");
    console.log(onlyNumbers);

    let reducer = "";

    do {
      console.log("do &&&&&&&&&&&&&&& str:");
      console.log(str);
      strToArr = str.toString().split(""); //make array
      onlyNumbersStr = strToArr.filter(Number); //keeps only numbers
      onlyNumbers = onlyNumbersStr.map(Number); //make str to numbers
      console.log("onlyNumbers");
      console.log(onlyNumbers);

      reducer = (accumulator, curr) => accumulator + curr;
      str = onlyNumbers.reduce(reducer);
      console.log("str reduced");
      console.log(str);
      console.log(typeof str);
    } while (str > 9);

    return str;
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Numerology</h1>
      </div>

      <h2>Buchstabenwert Tabelle</h2>
      <table id="tableLetters">
        <thead>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td>i</td>
          </tr>
          <tr>
            <td>j</td>
            <td>k</td>
            <td>l</td>
            <td>m</td>
            <td>n</td>
            <td>o</td>
            <td>p</td>
            <td>q</td>
            <td>r</td>
          </tr>
          <tr>
            <td>s</td>
            <td>t</td>
            <td>u</td>
            <td>v</td>
            <td>w</td>
            <td>x</td>
            <td>x</td>
            <td>z</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <p>Ä, ö und ü entsprechen hier ae, oe und ue; ß entspricht ss.</p>

      <div id="left">
        <h2>DATE OF BIRTH</h2>
        <p>dd.mm.yyyy</p>
        <input
          type="date"
          placeholder="00.00.0000"
          value={date}
          onChange={(e) => handleChangeDate(e.target.value)}
        />
        <br />
        <br />
        <label>
          Chemin de Vie:
          <input type="text" placeholder="place holder" value={cheminDeVie} />
        </label>

        <h2>NAMES</h2>
        <input
          type="text"
          placeholder="Enter firstnames"
          className="names"
          value={firstName}
          onChange={(e) => handleChangeFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter lastnames"
          className="names addSpace"
          value={lastName}
          onChange={(e) => handleChangeLastName(e.target.value)}
        />
        <br />
        <input
          type="text"
          readOnly
          placeholder="firstnames vowels"
          className="names"
          value={firstNameNumbersV}
        />
        <input
          type="text"
          readOnly
          placeholder="lastnames vowels"
          className="names addSpace"
          value={lastNameNumbersV}
        />
        <label>
          intime:
          <input
            type="text"
            readOnly
            placeholder="in"
            className="smallText"
            value={intime}
          />
        </label>
        <br />
        <input
          type="text"
          readOnly
          placeholder="firstnames all letters"
          className="names"
          value={firstNameNumbersAll}
        />
        <input
          type="text"
          readOnly
          placeholder="lastnames all letters"
          className="names addSpace"
          value={lastNameNumbersAll}
        />
        <label>
          Expression:
          <input
            type="text"
            readOnly
            placeholder="ex"
            className="smallText"
            value={expression}
          />
        </label>
        <br />
        <input
          type="hidden"
          readOnly
          placeholder="all names all letters"
          className="names addSpace"
          value={name}
        />
        <br />
        <input
          type="hidden"
          readOnly
          placeholder="all names all letters"
          className="names addSpace"
          value={nameNumbersAll}
        />
        <br />
        <input
          type="text"
          readOnly
          placeholder="firstnames consonant"
          className="names"
          value={firstNameNumbersC}
        />
        <input
          type="text"
          readOnly
          placeholder="lastnames consonant"
          className="names addSpace"
          value={lastNameNumbersC}
        />
        <label>
          realisation:
          <input
            type="text"
            readOnly
            placeholder="ex"
            className="smallText"
            value={realisation}
          />
        </label>
        <br />
      </div>
      <div id="right">
        <table id="tableNumbers">
          <tbody>
            <tr>
              <td>{number1} </td>
              <td>{number2} </td>
              <td> {number3}</td>
            </tr>
            <tr>
              <td>{number4} </td>
              <td>{number5} </td>
              <td>{number6} </td>
            </tr>
            <tr>
              <td>{number7} </td>
              <td>{number8} </td>
              <td> {number9}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
