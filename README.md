# J-Pets🐕
O J-Pets é um site que tem como objetivo promover e divulgar empresas do ramo de pet shop na região da Grande Vitória, facilitando o acesso à procura dos produtos e serviços oferecidos. Tem como principal característica as recomendações de lojas físicas e profissionais, onde será realizada a localização por meio de um sistema de mapa online. 

# 📄Descrição
O projeto é nosso T.C.C. e fruto de um ano e meio de estudos no SENAI de Vitória, Espírito Santo, onde mostraremos todas as habilidades adquiridas no curso de Desenvolvimento de Sistemas. 

# 🛠Tecnologias utilizadas
● HTML <br>
● CSS  <br>
● Bootstrap 5 <br>
● React.js  <br>
● JavaScript <br>
● Node.js <br>
● MySQL <br>

# 📝 Passo a passo para inicializar o projeto
Frontend<br>
● cd frontend/ <br>
● npm install (para instalar todas as dapêndencias) <br>
● npm start (para inicializar a aplicação) <br>

Backend<br>
● cd backend/ <br>
● npm install (para instalar todas as dapêndencias) <br>
● npx prisma generate (para gerar a tipagem do banco de dados no código fonte por meio do PrimaORM) <br>
● npm run dev (para inicializar a aplicação) <br>

# 📖 Regras de negócio 
O sistema possui três tipos de perfis: <b>administradores</b>, <b>empresa</b> e <b>tutor de pet</b>. <br>
As <b>empresas</b> precisam cadastrar os serviços e produtos (e suas marcas e modelos) que ela trabalha, cadastrar as informações de perfil profissional e ainda realizar o pagamento do plano no site para poder ser divulgado para os usuários do perfil tutores de pet. <br>
Os <b>tutores de pet</b> fazem a busca pelos produtos ou serviços desejados, onde irá aparecer uma lista de empresas que trabalham com o item de busca, e clicando na empresa aparece suas informações de endereço, contato e dias de funcionamento. <br> 
Os <b>administradores</b> ficam responsáveis por toda a gestão de itens no sistema, como serviços, produtos, marcas e modelos.<br>

Os itens a serem divulgados estão em duas categorias, serviços e produtos, sendo que produtos são separados em subcategorias. Inicialmente, temos os produtos exemplos: ração, cosméticos, medicamentos, brinquedos. Depois temos as marcas de um produto, como uma marca de ração, de exemplo temos a marca: Pedigree. E por fim, temos modelos de uma marca, como exemplo da marca Pedigree temos os modelos: Cães Adultos de Porte Pequeno e Mini Sabor Carne e Vegetais, Nutrição Essencial Carne para Cães Adultos.

Ordem <br>
● Serviços<br>
● Produtos>Marcas>Modelos<br>

Sobre o que diz respeito ao cadastro dos usuários, os de perfil <b>empresa</b> e <b>tutor de pet</b> podem se cadastrar pelo próprio login do sistema, já os de perfil administrador só podem ser cadastrado por outro usuário administrador dentro do sistema, então por padrão no banco já vem cadastrado um usuário administrador:

● Login: jpetsADM@gmail.com<br>
● Senha: @Senha123<br>

O sistema possui a funcionalidade de fazer o <b>pagamento do plano</b> oferecido para as empresas para serem divulgados no sistema, para simularmos a transação de cartões nos colocamos valores fixos no banco de dados para servir como dados validos, abaixo estão os 3 cartões registrados com as seguintes informações: numero da conta, nome do cartão, data de vencimento, valor em banco. Lembrando que o valor sempre é descontado do valor original quando feito o pagamento do plano.

●("5162924598813451","joão felipe silva","03/24","265",1234.56)<br>
●("4108634623561342","matheus costa","03/24","265",12.56)<br>
●("4392672037645123","marcelo ferreira","03/24","265",260.00)<br>

# 🎲 Banco de dados

O sql do banco de dados se encontra no próprio projeto em um arquivo "SQL-J-pets.sql"

# </> Desenvolvedores
<a href="https://github.com/paulogmedeiros">Paulo Gabriel</a> e <a href="https://github.com/galazzij">Jamille Galazi</a>
