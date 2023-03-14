import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { questions } from "./questions";


const Rank = (props) =>{
    const supabase = props.supabase;
    const [ranking, setRanking] = useState([]);




    const fetchRanking = async () => {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .order('game_time', { ascending: true })
          .limit(10);
      
        if (error) {
          console.error(error);
          return;
        }
      
        setRanking(data);
      };

      useEffect(() => {
        fetchRanking();
      }, []);

    return <>
    <div className="rank">
      <h1 className="rank_title">RANKING</h1>
      <table className="rank_table">
        <thead>
          <tr>
            <th className="rank_head">Miejsce</th>
            <th className="rank_head">Imię</th>
            <th className="rank_head">Czas gry</th>
          </tr>
        </thead>
        <tbody className="rank_body">
          {ranking.map((result, index) => (
            <tr className="rank_row" key={result.id}>
              <td className="rank_element">{index + 1}</td>
              <td className="rank_element">{result.user_name}</td>
              <td className="rank_element">{result.game_time}s</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/"}>
        <button className="rank_button">Powrót do menu głównego</button>
      </Link>
    </div>
  </>
}



export {Rank}