MundoDevops - Programador Júnior React-Native

Um desafio que aceitei de uma empresa para uma seletiva no qual vim testar o meu conhecimento adquirido, prezando o apredizado que pode engloba na minha carreira como desenvolvedor.
Desenvolvi o layout fornecido de um aplicativo voltado ao auxílio de atividades físicas, que exibe algumas informações do tipo de esporte do qual foi praticado como calorias, tempo da atividade, peso e qual foi o dia no qual praticou.

Informações sobre o ambiente de desenvolvimento

React Native Environment Info:
    System:
      OS: Linux 4.15 Ubuntu 18.04.2 LTS (Bionic Beaver)
      Shell: 5.4.2 - /usr/bin/zsh
    Binaries:
      Node: 10.16.0 - /usr/bin/node
      Yarn: 1.16.0 - /usr/bin/yarn
      npm: 6.9.0 - /usr/bin/npm
    npmPackages:
      react: 16.8.3 => 16.8.3 
      react-native: 0.59.8 => 0.59.8 


Downloads e Instalação

• A fonte utilizada é MontSerrat, em diferentes variações, e pode ser encontrada gratuitamente para download na internet.
• Os ı́cones de menu e configurações podem ser obtidos a partir de um dos conjuntos de fontes desse pacote: https://github.com/oblador/react-native-vector-icons.

Tenha o CLI do React Native instalado em sua máquina
O node vem com o npm, caso queira pode instalar o yarn que também permite instalar a interface de linha de comando do React Native.

Para instalar esse App no seu Emulador Android ou em seu dispositivo móvel e poder ter acesso a estrutura criada, faça o download ou clone o repositório com o git e terá todos os arquivos do projeto, assim acesse a pasta para executar use este comando:

npm install

E com a execução deste código irá gerar a pasta node_modules no qual baíxará todas as dependencias do arquivo package.json, em seguida execute este outro comando para linkar todos os pacotes do projeto:

react-native link

E assim podemos já inicializar o projeto com o comando abaixo

react-native run-android

Organização do projeto

Foi criada uma estrutura dentro de uma pasta chamada assets onde criei mais duas pastas a img e a fonts.

Criei a pasta src onde tenho uma pasta components que dentro dela contém as seguintes pastas Bubble, Button, Card, Description e Header.

No arquivo principal App.js é utilizado o componente Header no qual fica o cabeçalho do aplicativo, utilizo o scrollView para mover o componente Card no qual fica um outro componente o Description que é onde está a maior parte do código.


