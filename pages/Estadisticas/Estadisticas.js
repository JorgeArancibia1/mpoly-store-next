import AdminLayout from "../../layouts/AdminLayout";
import { Line } from "react-chartjs-2";

const Estadisticas = () => {
	return (
		<AdminLayout>
			<Line
				data={{
					labels: ["Enero", "Febrero", "Marzo"],
					datasets: [
						{
							label: "Poleras",
							data: [20, 40, 60],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
						},
						{
							label: "Pantalones",
							data: [2, 80, 6],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ]
						},
					],
				}}
				width={300}
				height={200}
				options={{
           maintainAspectRatio: false,
           scales: {
             yAxes: [
               {
                 ticks: {
                   beginAtZero: true
                 }
               }
             ]
           },
           legend: {
             labels: {
               fontSize: 25
             }
           }

        }
      }
			/>
		</AdminLayout>
	);
};

export default Estadisticas;
