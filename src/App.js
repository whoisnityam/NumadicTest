import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import "./App.css";
import { Button } from "@material-ui/core";

import CustomDialog from "./CustomDialog";
import CustomTable from "./CustomTable";

const countriesURL = "https://restcountries.eu/rest/v2/all";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	tr: {
		fontWeight: 900,
	},
	headerTab: {},
	countryRow: {},
});

function App() {
	const [countriesData, setCountriesData] = useState([]);
	const [open, setOpen] = useState(false);
	const [country, setCountry] = useState();
	const classes = useStyles();

	const getCountriesWithAxios = async () => {
		const response = await axios.get(countriesURL);
		setCountriesData(response.data);
	};

	useEffect(() => {
		getCountriesWithAxios();
	}, []);

	const detailsButtonClicked = (country) => {
		setCountry(country);
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<CustomDialog country={country} open={open} onClose={onClose} />
			{/* <Grid container>
				<Grid item xs={12}>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead className={classes.headerTab}>
								<TableRow>
									<TableCell>
										<strong>Details</strong>
									</TableCell>
									<TableCell>
										<strong>Name</strong>
									</TableCell>
									<TableCell align="right">
										<strong>Flag</strong>
									</TableCell>
									<TableCell align="right">
										<strong>Capital</strong>
									</TableCell>
									<TableCell align="right">
										<strong>Population</strong>
									</TableCell>
									<TableCell align="right">
										<strong>Region</strong>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{countriesData.map((country, index) => (
									<TableRow key={index}>
										<TableCell align="center">
											<Button
												variant="contained"
												color="primary"
												onClick={() => {
													detailsButtonClicked(
														country
													);
												}}
											>
												Details
											</Button>
										</TableCell>
										<TableCell
											component="th"
											scope="row"
											className={classes.tr}
										>
											{country.name}
										</TableCell>
										<TableCell align="right">
											<img
												src={country.flag}
												alt=""
												width="32px"
											/>
										</TableCell>
										<TableCell align="right">
											{country.capital}
										</TableCell>
										<TableCell align="right">
											{country.population}
										</TableCell>
										<TableCell align="right">
											{country.region}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid> */}
			{countriesData && (
				<CustomTable
					countriesData={countriesData}
					detailsButtonClicked={detailsButtonClicked}
				/>
			)}
		</>
	);
}

export default App;
