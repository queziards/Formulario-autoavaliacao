const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {

const content = document.querySelector("#content")

const options = {
    margin: [-250, -10, 0, 0], //top, left, buttom, right
    filename: "arquivo.pdf",
    html2canvas: {scale:2},
    jsPDF: {unit: "mm", format:"a4", orientation:"portrait"}
}
 html2pdf().set(options).from(content).save();

});


// Defina a configuração das margens aqui (em pontos, onde 1 ponto = 1/72 polegadas)
const margemSuperior = 0;
const margemInferior = 0;
const margemEsquerda = 0;
const margemDireita = 0;

// Dados do conteúdo do PDF
const generatePDF = [
  { text: 'Exemplo de texto no PDF', fontSize: 14 }
  // Adicione aqui mais conteúdo, se necessário
];

// Defina o layout do PDF com as margens desejadas
const layoutPDF = {
  pageMargins: [margemEsquerda, margemSuperior, margemDireita, margemInferior],
  content: conteudoPDF
};

// Gere o PDF e abra-o em uma nova janela do navegador
pdfMake.generatePDF(layoutPDF).open();


  const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        // Aqui você pode realizar alguma ação quando o usuário selecionar uma opção específica
        console.log('Opção selecionada:', radio.value);
      });
    });
