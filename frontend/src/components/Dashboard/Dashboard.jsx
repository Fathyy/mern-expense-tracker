import { useGlobalContext } from "../../context/GlobalContext";
import Chart from "./DashboardComponents/Chart/Chart";
import "./Dashboard.css";
import { FaDollarSign } from "react-icons/fa";
import History from "./DashboardComponents/History/History";
export default function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance
  } = useGlobalContext();
  return (
    <div className="wrapper-dashboard">
      <div className="inner-layout">
        <h1 className="transaction-title">All Transactions</h1>

        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  <FaDollarSign /> {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  <FaDollarSign /> {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  <FaDollarSign /> {totalBalance()}
                </p>
              </div>
            </div>
          </div>

          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
