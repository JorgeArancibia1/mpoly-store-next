import { Button, Icon } from "semantic-ui-react";

const SemanticTable = ({ isCreate = false }) => {
	return (
		<table className="ui compact celled definition table">
			<thead className="full-width">
				<tr>
					<th></th>
					<th>Producto</th>
					<th>Marca</th>
					<th>Talla</th>
					<th>Precio</th>
					<th>Acción</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="collapsing">
						<div className="ui fitted checkbox">
							<input type="checkbox" /> <label></label>
						</div>
					</td>
					<td>John Lilki</td>
					<td>September 14, 2013</td>
					<td>jhlilk22@yahoo.com</td>
					<td>No</td>
					<td>
						<Button color='google plus' icon>
							<Icon  name="trash" />
						</Button>
					</td>
				</tr>
				<tr>
					<td className="collapsing">
						<div className="ui fitted checkbox">
							<input type="checkbox" /> <label></label>
						</div>
					</td>
					<td>Jamie Harington</td>
					<td>January 11, 2014</td>
					<td>jamieharingonton@yahoo.com</td>
					<td>Yes</td>
					<td>
						<Button color='google plus' icon>
							<Icon  name="trash" />
						</Button>
					</td>
				</tr>
				<tr>
					<td className="collapsing">
						<div className="ui fitted checkbox">
							<input type="checkbox" /> <label></label>
						</div>
					</td>
					<td>Jill Lewis</td>
					<td>May 11, 2014</td>
					<td>jilsewris22@yahoo.com</td>
					<td>Yes</td>
					<td>
						<Button color='google plus' icon>
							<Icon  name="trash" />
						</Button>
					</td>
				</tr>
			</tbody>
			<tfoot className="full-width">
				{isCreate ? (
					<tr>
						<th></th>
						<th colspan="4">
							<div className="ui right floated small primary labeled icon button">
								Crear producto
							</div>
						</th>
					</tr>
				) : (
					<tr>
						<th></th>
						<th colspan="5">
							<div className="ui right floated small primary labeled icon button">
								<i class="trash alternate outline icon"></i>
								Eliminar productos
							</div>
						</th>
					</tr>
				)}
			</tfoot>
		</table>
	);
};

export default SemanticTable;
