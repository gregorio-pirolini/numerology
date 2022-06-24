import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { letters } from "./letters";
import { cdv } from "./cheminDeVie";
import { $intime } from "./intime";
import { $expression } from "./expression";
import { $realisation } from "./realisation";

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

  const [expression, setExpression] = useState("-");
  const [intime, setIntime] = useState("-");
  const [realisation, setRealisation] = useState("-");

  const [expressionAllgemein, setExpressionAllgemein] = useState("");
  const [expressionBedeutung, setExpressionBedeutung] = useState("");
  const [expressionMann, setExpressionMann] = useState("");
  const [expressionFrau, setExpressionFrau] = useState("");
  const [intimeAllgemein, setIntimeAllgemein] = useState("");
  const [intimeCharakter, setIntimeCharakter] = useState("");
  const [realisationAllgemein, setRealisationAllgemein] = useState("");
  const [realisationCharakter, setRealisationCharakter] = useState("");
  const [realisationSchicksal, setRealisationSchicksal] = useState("");

  //  ######             ##                              ###        ######   ##          ##    ##
  //  ##   ##            ##                             ##          ##   ##              ##    ##
  //  ##   ##   #####   ####    #####          #####   ####         ##   ##  ##  ## ##  ####   ######
  //  ##   ##       ##   ##    ##   ##        ##   ##   ##          ######   ##  ###     ##    ##   ##
  //  ##   ##   ######   ##    #######        ##   ##   ##          ##   ##  ##  ##      ##    ##   ##
  //  ##   ##  ##   ##   ##    ##             ##   ##   ##          ##   ##  ##  ##      ##    ##   ##
  //  ######    ######    ###   ######         #####    ##          ######   ##  ##       ###  ##   ##
  const [date, setDate] = useState("");
  const [cheminDeVieM1, setCheminDeVieM1] = useState("-");
  const [cheminDeVieM2, setCheminDeVieM2] = useState("-");
  const [cheminDeVieM3, setCheminDeVieM3] = useState("-");
  const [cdvHeadline, setCdvHeadline] = useState("-");
  const [cdvQuelle, setCdvQuelle] = useState("-");
  const [cdvEigenschaften, setCdvEigenschaften] = useState("");
  const [cdvSchattenseiten, setCdvSchattenseiten] = useState("");
  const [cdvText, setCdvText] = useState("");

  useEffect(() => {
    setCheminDeVieM1(() => calculateCheminDeVieM1());
    setCheminDeVieM2(() => calculateCheminDeVieM2());
  }, [date]);

  useEffect(() => {
    setCheminDeVieM3(() => calculateCheminDeVieM3());
  }, [cheminDeVieM1, cheminDeVieM2]);

  useEffect(() => {
    setCdvHeadline(() => cdv[cheminDeVieM3].headline);
    setCdvQuelle(() => cdv[cheminDeVieM3].quelle);

    setCdvEigenschaften(() => cdv[cheminDeVieM3].eigenschaften);
    setCdvSchattenseiten(() => cdv[cheminDeVieM3].schattenseiten);
    setCdvText(() => cdv[cheminDeVieM3].text);
  }, [cheminDeVieM3]);

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

  useEffect(() => {
    setExpressionAllgemein(() => $expression[expression].allgemein);
    setExpressionBedeutung(() => $expression[expression].Bedeutung);
    setExpressionMann(() => $expression[expression].Mann);
    setExpressionFrau(() => $expression[expression].Frau);
    setIntimeAllgemein(() => $intime[intime].allgemein);
    setIntimeCharakter(() => $intime[intime].Charakter);
    setRealisationAllgemein(() => $realisation[realisation].allgemein);
    setRealisationCharakter(() => $realisation[realisation].Charakter);
    setRealisationSchicksal(() => $realisation[realisation].Schicksal);
  }, [expression, realisation, intime]);

  const handleChangeFirstName = (event) => {
    console.log("change");
    setFirstName(event);
  };

  const handleChangeLastName = (event) => {
    console.log("change");
    setLastName(event);
  };

  const handleChangeDate = (event) => {
    console.log("change");
    setDate(event);
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

  const calculateCheminDeVieM1 = () => {
    let str = date;

    if (str.length < 1) return "-"; //no number to bring yet
    let strToArr = []; //make array
    let onlyNumbersStr = []; //keeps only numbers
    let onlyNumbers = []; //make str to numbers
    console.log("onlyNumbers");
    console.log(onlyNumbers);

    let reducer = "";

    do {
      console.log("do calculateCheminDeVieM1 str:");
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
      if (str == 22) {
        return str;
      } else if (str == 11) {
        return str;
      }
    } while (str > 9);

    return str;
  };

  const calculateCheminDeVieM2 = () => {
    let str = date;
    console.log("str: " + str);
    if (str.length < 1) return "-"; //no number to bring yet
    let strToArr = []; //make array
    let onlyNumbers = []; //make str to numbers
    console.log("onlyNumbers");
    console.log(onlyNumbers);

    let reducer = "";

    do {
      console.log("do calculateCheminDeVieM2 str:");
      console.log(str);
      if (str.toString().indexOf("-") > -1) {
        strToArr = str.toString().split("-"); //make array
      } else {
        strToArr = str.toString().split(""); //make array
      }
      console.log("strToArr");
      console.log(strToArr);
      onlyNumbers = strToArr.map(Number); //make str to numbers
      console.log("onlyNumbers");
      console.log(onlyNumbers);

      reducer = (accumulator, curr) => accumulator + curr;
      str = onlyNumbers.reduce(reducer);
      console.log("str reduced");
      console.log(str);
      console.log(typeof str);
      if (str == 22) {
        return str;
      } else if (str == 11) {
        return str;
      }
    } while (str > 9);

    return str;
  };

  const calculateCheminDeVieM3 = () => {
    if (cheminDeVieM1 == "-") {
      return "-";
    }
    let beide = [];
    beide.push(cheminDeVieM1, cheminDeVieM2);
    console.log("----------------------");
    console.log(
      "cheminDeVieM1---------------------- " +
        cheminDeVieM1 +
        typeof cheminDeVieM1
    );
    console.log(
      "cheminDeVieM2---------------------- " +
        cheminDeVieM2 +
        typeof cheminDeVieM2
    );
    console.log("Math.min(beide);---------------------- " + Math.min(...beide));
    return Math.min(...beide);
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
      <div id="erklaerung">
        <h2>Erklärungen</h2>
        <h3>Buchstabenwert Tabelle</h3>
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
      </div>
      {/*erklaerung */}
      <div id="eingabe">
        <div id="top">
          <hr />
          <h2>Eingabe</h2>
        </div>
        <div id="left">
          <h3>DATE OF BIRTH</h3>
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
            Chemin de Vie méthode 1:
            <input
              type="text"
              placeholder="place holder"
              readOnly
              value={cheminDeVieM1}
            />
          </label>
          <br />
          <label>
            Chemin de Vie méthode 2:
            <input
              type="text"
              readOnly
              placeholder="place holder"
              value={cheminDeVieM2}
            />
          </label>
          <label>
            Chemin de Vie méthode 3:
            <input
              type="text"
              readOnly
              placeholder="place holder"
              value={cheminDeVieM3}
            />
          </label>
          <h3>NAMES</h3>
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
        {/* left */}
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
        {/* right */}
      </div>
      {/* eingabe */}
      <div id="ergebnisse">
        <hr />
        <h2>ERGEBNIS</h2>
        <h3>
          Lebenszahl {cheminDeVieM3} : <i>{cdvHeadline}</i>
        </h3>
        <p>
          <a href={cdvQuelle}>{cdvQuelle}</a>
        </p>
        <h4>
          <u>Eigenschaften</u> : <i>{cdvEigenschaften}</i>
        </h4>
        <h4>
          <u>Schattenseiten</u> : <i>{cdvSchattenseiten}</i>
        </h4>
        <p className="new-line">{cdvText}</p>
        <h3>
          Schicksalzahl/Namenszahl/Namensnummer oder Ausdrucksnummer{" "}
          {expression} :
        </h3>
        <p>allgemein: {expressionAllgemein} </p>
        <p>Bedeutung: {expressionBedeutung}</p>
        <p>Mann: {expressionMann}</p>
        <p>Frau: {expressionFrau}</p>
        <p>
          <a href="https://de.astrologyk.com/numerologie/schicksalszahl">
            https://de.astrologyk.com/numerologie/schicksalszahl
          </a>
        </p>
        <h3>herzenszahl/Seelennummer {intime}:</h3>
        <p>allgemein : {intimeAllgemein}</p>
        <p>Charakter : {intimeCharakter}</p>
        <p>
          <a href="https://de.astrologyk.com/numerologie/seelenzahl">
            https://de.astrologyk.com/numerologie/seelenzahl
          </a>
        </p>
        <h3>Persönlichkeit oder innere Traumzahl {realisation} :</h3>
        <p>allgemein:{realisationAllgemein} </p>
        <p>Charakter: {realisationCharakter} </p>
        <p>Schicksal: {realisationSchicksal} </p>
        <p>
          <a href="https://de.astrologyk.com/numerologie/persoenlichkeitszahl">
            https://de.astrologyk.com/numerologie/persoenlichkeitszahl
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
