$(document).ready(function () {
        $('#data').mask('00/00/0000')
    })
    $(document).ready(function () {
        $('#cpf').mask('000.000.000-00')
    })
    $(document).ready(function () {
        $('#telefone').mask('(00)00000-0000')
    })

function escolhaCidade(){
	var estado = document.getElementById('estado').value;

	switch(estado){
		case 'ac':
			document.getElementById('cidades').innerHTML=
			"<option value='acre'>Rio Branco</option>"+
			"<option value='acre'>Cruzeiro do Sul</option>"+
			"<option value='acre'>Feijó</option>";
			break;

		case 'al':
			document.getElementById('cidades').innerHTML=
			"<option value='alagoas'>Maceió</option>"+
			"<option value='alagoas'>Marechal Deodoro</option>"+
			"<option value='alagoas'>Rio Largo</option>";
			break;

		case 'ap':
			document.getElementById('cidades').innerHTML = 
			"<option value='amapá'>Calçoene</option>"+
			"<option value='amapá'>Cutias</option>"+
			"<option value='amapá'>Ferreira Gomes</option>";
			break;

		case 'am':
			document.getElementById('cidades').innerHTML =
			"<option value='amazonas>Manaus<option>"+
			"<option value='amazonas>Parintins<option>"+
			"<option value='amazonas>Itacoatiara<option>";
			break;

		case 'ba':
			document.getElementById('cidades').innerHTML = 
			"<option value='bahia'>Salvador</option>"+
			"<option value='bahia'>Porto Seguro</option>"+
			"<option value='bahia'>Feira de Santana</option>";
			break;

		case 'ce':
			document.getElementById('cidades').innerHTML = 
			"<option value='ceará'>Fortaleza</option>"+
			"<option value='ceará'>Juazeiro do Norte</option>"+
			"<option value='ceará'>Aquiraz</option>";
			break;

		case 'df':
			document.getElementById('cidades').innerHTML = 
			"<option value='distrito federal'>Brasília</option>"+
			"<option value='distrito federal'>Gama</option>"+
			"<option value='distrito federal'>Taguatinga</option>";
			break;

		case 'es':
			document.getElementById('cidades').innerHTML = 
			"<option value='espirito santo'>Vitória</option>"+
			"<option value='espirito santo'>Linhares</option>"+
			"<option value='espirito santo'>Itapemirim</option>";
			break;

		case 'go':
			document.getElementById('cidades').innerHTML = 
			"<option value='espirito santo'>Vitória</option>"+
			"<option value='espirito santo'>Linhares</option>"+
			"<option value='espirito santo'>Itapemirim</option>";
			break;

		case 'ma':
			document.getElementById('cidades').innerHTML = 
			"<option value='espirito santo'>Vitória</option>"+
			"<option value='espirito santo'>Linhares</option>"+
			"<option value='espirito santo'>Itapemirim</option>";
			break;

		case 'mt':
			document.getElementById('cidades').innerHTML = 
			"<option value='espirito santo'>Vitória</option>"+
			"<option value='espirito santo'>Linhares</option>"+
			"<option value='espirito santo'>Itapemirim</option>";
			break;

		case 'ms':
			document.getElementById('cidades').innerHTML = 
			"<option value='espirito santo'>Vitória</option>"+
			"<option value='espirito santo'>Linhares</option>"+
			"<option value='espirito santo'>Itapemirim</option>";
			break;

		default:
			document.getElementById('cidades').innerHTML = 
			"<option value='selecione'>Selecione a Cidade</option>"
			break;

	}
}