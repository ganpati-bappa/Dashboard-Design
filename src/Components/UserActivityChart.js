// Graph Js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

// Bar
import { Bar } from 'react-chartjs-2'

// For Faking the data
import faker from 'faker';

// SCSS
import './../SCSS/UserActivityChart.scss'


ChartJS.register (CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Options
export const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
    },
        title: {
            display: true,
            text: 'No of Hours user is Login',
        },
    },
};

// Weekly Activity
const labels = ['Monday', 'Tueasday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday']

export const data = {
    labels,
    datasets : [{
        label : 'Login Hours',
        data : labels.map(() => {
            return (faker.datatype.number({min : 0 , max : 24}))
        }),
        backgroundColor : '#66FCF1'
    }]
}


export const UserActivityChart = () => {
    return (
        <div className = "UserActivityChart_container">
            <Bar options = {options} 
                data = {data}/>
        </div>
    )
}

export default UserActivityChart