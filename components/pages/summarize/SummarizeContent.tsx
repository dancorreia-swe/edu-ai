"use client";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { IconClipboard } from "@tabler/icons-react";

const SummarizeContent = ({ checked }: any) => {
  const [textareaValue, setTextareaValue] = useState("");
  const handleTextareaChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTextareaValue(event.target.value);
  };

  const [isChecked, setIsChecked] = useState<Boolean>(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <div className="flex w-full items-center justify-center">
        {!isChecked ? (
          <div className="w-full">
            <Textarea
              placeholder="Type your text to summarize"
              onChange={handleTextareaChange}
              className="dark:bg-slate-900/50"
            />
            <Button className="my-4 flex w-40 text-white dark:bg-slate-700 dark:hover:!bg-gray-600">
              Send
            </Button>
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, DOCX, TXT
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        )}
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold">Conteúdo sumarizado</span>
          <div className="flex items-center space-x-2 rounded-md border p-2 text-sm">
            <IconClipboard size={16} />
            <span>Copiar</span>
          </div>
        </div>
        <div className="mt-4 rounded-md border p-4">
          {textareaValue ? (
            <div>
              <p>
                O texto descreve o Reino de França no início do século XIV,
                destacando sua população, extensão territorial e estrutura
                social. Com uma população de 16 a 17 milhões de habitantes, a
                França era a principal potência demográfica da Europa. O
                território se estendia do Escalda aos Pirenéus e do Oceano
                Atlântico ao Ródano, Saône e Meuse, cobrindo aproximadamente
                424.000 km².
                <br /> <br />O texto aborda a organização da sociedade,
                mencionando diferenças entre o Norte e o Sul em termos de
                linguagem, cultura e independência em relação ao rei. Destaca-se
                o papel significativo do clero na sociedade, com clérigos
                administrando instituições e promovendo instituições de caridade
                e educação. A nobreza, por sua vez, é descrita como responsável
                por combinar riqueza, poder e bravura no campo de batalha. A
                guerra torna-se lucrativa, com a cavalaria pesada sendo
                estruturada para lutas heroicas.
                <br /> <br /> Os Capetianos, para consolidar seu poder, fizeram
                promessas ao povo, como a criação de cidades livres e os Estados
                Gerais. No entanto, às vésperas da Guerra dos Cem Anos, o
                sistema enfrentou desafios devido ao crescimento demográfico,
                superpopulação rural e exigências de autonomia nas cidades.
                Apesar dos sucessos territoriais, os reis de Inglaterra
                mantiveram a Guiana e o condado de Ponthieu, tornando o rei de
                Inglaterra vassalo do rei de França.
              </p>
            </div>
          ) : (
            <div>Nothing here</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SummarizeContent;
