import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
// import "./CustomTable.css";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,

	},
	body: {
		fontSize: 14,
		fontFamily: 'Times New Roman',
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const CustomTable = (props) => {
	const classes = useStyles();

	const { countriesData, detailsButtonClicked } = props;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell width="250px" >Details</StyledTableCell>
						<StyledTableCell width="250px" align="left">Name</StyledTableCell>
						<StyledTableCell width="250px" align="left">Flag</StyledTableCell>
						<StyledTableCell width="250px" align="left">Capital</StyledTableCell>
						<StyledTableCell width="250px" align="left">Population</StyledTableCell>
						<StyledTableCell width="250px" align="left">Region</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{countriesData.map((country) => (
						<StyledTableRow key={country.name}>
							<StyledTableCell align="left">
								<Button
									variant="contained"
									color="primary"
									onClick={() => {
										detailsButtonClicked(country);
									}}
								>
									Details
								</Button>
							</StyledTableCell>
							<StyledTableCell component="th" scope="row">
								{country.name}
							</StyledTableCell>
							<StyledTableCell align="left">
								<img src={country.flag} alt="" width="32px" />
							</StyledTableCell>
							<StyledTableCell align="left">
								{country.capital}
							</StyledTableCell>
							<StyledTableCell align="left">
								{country.population}
							</StyledTableCell>
							<StyledTableCell align="left">
								{country.region}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CustomTable;
