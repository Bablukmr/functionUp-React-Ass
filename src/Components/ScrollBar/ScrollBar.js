import { arr } from "./Atoms/Atoms.js";
import "./ScrollBar.css";

export default function ScrollBar() {
    return (
        <>
        <h1>Know your mentors</h1>
        <p>Work with a mentor (senior data scientists from top companies) who closely looks at your progress,<br/>  gives you personalized feedback and helps you fill gaps in yourknowledge.</p>
            <div className="main">
                {arr.map((a,b) => (
                    <div className="cards" key={b}>
                        <img src={a.image} alt={a.name} />
                        <h4>
                            {a.name},{a.education}{" "}
                        </h4>
                        <p>{a.designation}</p>
                        <p style={{ color: 'blue' }}>{a.experiance}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
