import React, { useRef, useState } from "react";
import Header from "$/Header";
import Body from "$/Body";
import Footer from "$/Footer";
import Weekly from "$/Weekly";
import CheckBox from "#/Inputs/CheckBox";
import RoundedGoButton from "#/Buttons/RoundedGoButton";
const sgk = [
  /*1*/ [false, true, true, true, true, false, false],
  /*2*/ [false, true, true, true, true, false, false],
  /*3*/ [false, true, true, true, true, false, false],
  /*4*/ [false, true, true, true, true, false, false],
  /*5*/ [false, true, true, true, true, false, false],
  /*6*/ [true, true, true, true, true, false, false],
  /*7*/ [true, true, true, true, true, false, false],
  /*8*/ [true, true, true, true, true, true, true],
  /*9*/ [true, true, true, true, true, true, true],
  /*10*/ [true, true, true, true, true, true, true],
  /*11*/ [true, true, true, true, true, true, true],
  /*12*/ [true, true, true, true, true, true, true],
  /*13*/ [true, true, true, true, true, true, true],
  /*14*/ [true, true, true, true, true, true, true],
  /*15*/ [true, true, true, true, true, true, true],
  /*16*/ [true, true, true, true, true, true, true],
  /*17*/ [true, true, true, true, true, true, true],
  /*18*/ [true, true, true, true, true, true, true],
  /*19*/ [true, true, true, true, true, true, true],
  /*20*/ [true, true, true, true, true, true, true],
  /*21*/ [true, true, true, true, true, false, false],
  /*22*/ [true, true, true, true, true, false, false],
  /*23*/ [true, true, true, true, true, false, false],
  /*24*/ [true, true, true, true, true, false, false],
];
const alt20 = [
  /*1*/ [false, false, false, false, false, false, false],
  /*2*/ [false, false, false, false, false, false, false],
  /*3*/ [false, false, false, false, false, false, false],
  /*4*/ [false, false, false, false, false, false, false],
  /*5*/ [false, false, false, false, false, false, false],
  /*6*/ [false, false, false, false, false, false, false],
  /*7*/ [false, false, false, false, false, false, false],
  /*8*/ [false, false, false, false, false, false, false],
  /*9*/ [false, false, false, false, false, false, false],
  /*10*/ [false, false, false, false, false, false, false],
  /*11*/ [false, false, false, false, false, false, false],
  /*12*/ [false, false, false, false, false, false, false],
  /*13*/ [true, true, true, true, true, true, true],
  /*14*/ [true, true, true, true, true, true, true],
  /*15*/ [true, true, true, true, true, true, true],
  /*16*/ [true, true, true, true, true, true, true],
  /*17*/ [false, false, false, false, false, false, false],
  /*18*/ [false, false, false, false, false, false, false],
  /*19*/ [false, false, false, false, false, false, false],
  /*20*/ [false, false, false, false, false, false, false],
  /*21*/ [false, false, false, false, false, false, false],
  /*22*/ [false, false, false, false, false, false, false],
  /*23*/ [false, false, false, false, false, false, false],
  /*24*/ [false, false, false, false, false, false, false],
];
const ust65 = [
  /*1*/ [false, false, false, false, false, false, false],
  /*2*/ [false, false, false, false, false, false, false],
  /*3*/ [false, false, false, false, false, false, false],
  /*4*/ [false, false, false, false, false, false, false],
  /*5*/ [false, false, false, false, false, false, false],
  /*6*/ [false, false, false, false, false, false, false],
  /*7*/ [false, false, false, false, false, false, false],
  /*8*/ [false, false, false, false, false, false, false],
  /*9*/ [false, false, false, false, false, false, false],
  /*10*/ [true, true, true, true, true, true, true],
  /*11*/ [true, true, true, true, true, true, true],
  /*12*/ [true, true, true, true, true, true, true],
  /*13*/ [true, true, true, true, true, true, true],
  /*14*/ [false, false, false, false, false, false, false],
  /*15*/ [false, false, false, false, false, false, false],
  /*16*/ [false, false, false, false, false, false, false],
  /*17*/ [false, false, false, false, false, false, false],
  /*18*/ [false, false, false, false, false, false, false],
  /*19*/ [false, false, false, false, false, false, false],
  /*20*/ [false, false, false, false, false, false, false],
  /*21*/ [false, false, false, false, false, false, false],
  /*22*/ [false, false, false, false, false, false, false],
  /*23*/ [false, false, false, false, false, false, false],
  /*24*/ [false, false, false, false, false, false, false],
];
const arasi = [
  /*1*/ [false, true, true, true, true, false, false],
  /*2*/ [false, true, true, true, true, false, false],
  /*3*/ [false, true, true, true, true, false, false],
  /*4*/ [false, true, true, true, true, false, false],
  /*5*/ [false, true, true, true, true, false, false],
  /*6*/ [true, true, true, true, true, false, false],
  /*7*/ [true, true, true, true, true, false, false],
  /*8*/ [true, true, true, true, true, false, false],
  /*9*/ [true, true, true, true, true, false, false],
  /*10*/ [true, true, true, true, true, true, true],
  /*11*/ [true, true, true, true, true, true, true],
  /*12*/ [true, true, true, true, true, true, true],
  /*13*/ [true, true, true, true, true, true, true],
  /*14*/ [true, true, true, true, true, true, true],
  /*15*/ [true, true, true, true, true, true, true],
  /*16*/ [true, true, true, true, true, true, true],
  /*17*/ [true, true, true, true, true, true, true],
  /*18*/ [true, true, true, true, true, true, true],
  /*19*/ [true, true, true, true, true, true, true],
  /*20*/ [true, true, true, true, true, true, true],
  /*21*/ [true, true, true, true, true, false, false],
  /*22*/ [true, true, true, true, true, false, false],
  /*23*/ [true, true, true, true, true, false, false],
  /*24*/ [true, true, true, true, true, false, false],
];
const Home = () => {
  const yasRef = useRef(null);
  const yasValue = useState("");
  const [checked, setChecked] = useState(false);
  const tables = useState(null);

  const action = () => {
    const yas = yasRef.current.value;
    const sgkmi = checked;
    if (sgkmi) return tables[1](sgk);
    if (!yas) return false;
    if (yas < 20) return tables[1](alt20);
    if (yas > 65) return tables[1](ust65);
    if (yas <= 65 && yas >= 20) return tables[1](arasi);
  };
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <Header
        onClick={() => {
          tables[1](null);
        }}
      />
      <Body>
        <div className="w-full flex">
          <div className="mx-3 flex my-5">
            <input
              value={yasValue[0]}
              ref={yasRef}
              pattern="[0-9]*"
              type="yas"
              placeholder={"yaşınız"}
              className="w-16 border-b focus:border-blue-3 focus:placeholder-blue-3 animation-fast text-lg"
              onChange={({
                target: {
                  value,
                  validity: { valid },
                },
              }) => {
                valid && yasValue[1](value.substring(0, 10));
              }}
            />
          </div>
          <div className="mx-3 flex items-center">
            <div className="mr-1 text-black flex items-center">
              <CheckBox
                checked={checked}
                onChange={() => setChecked((v) => !v)}
                size={20}
              />
            </div>
            <span className="text-xs font-medium">Çalışıyorum</span>
          </div>
          <div className="mx-3 flex-grow flex items-center justify-end">
            <RoundedGoButton onClick={action} />
          </div>
        </div>
        <div className="w-full flex-grow">
          {tables[0] ? (
            <Weekly times={tables[0]} />
          ) : (
            <div className="h-full w-full flex-full">
              <span className="text-3xl">Bizim de kafamız karıştı :)</span>
            </div>
          )}
        </div>
        <div className="w-full flex-full my-5">
          <span>
            Bugünlerde tekrardan gündeme gelen Sokağa Çıkma Yasakları sebebiyle
            zorlu günler yaşıyoruz. İki genç olarak yaşadığımız kafa
            karışıklığını sanal bir çözüme ulaştırdık. Sitemizi ziyaret
            ettiğinizde 2 kolay soruyu cevaplamanız dahilinde (Yaşınız ve
            Çalışma Durumunuz) size sunduğumuz takvim sayesinde hangi günler ve
            saatler arasında Sokağa Çıkma Yasaklarını ihlal etmediğinizi
            göreceksiniz.
          </span>
        </div>
      </Body>
      <Footer />
    </div>
  );
};

export default Home;
