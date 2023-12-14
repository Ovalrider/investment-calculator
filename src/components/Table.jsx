import styles from "./Table.module.css";

export default function Table(props) {

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>{formatter.format(item.savingsEndOfYear - props.initInvestment - item.yearlyContribution * item.year)}</td>
              <td>{formatter.format( props.initInvestment + item.yearlyContribution * item.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
