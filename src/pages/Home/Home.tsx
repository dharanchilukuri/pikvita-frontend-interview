import { Question } from "../../types/interfaces";
import { validateQuestions } from "../../utils/validation";

    const apiKey = import.meta.env.VITE_MY_API_KEY;

    const Home = () => {


    const fetchData = async () => {
        try {
            const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=code&difficulty=Easy&limit=10&tags=JavaScript`);
            const questions: Question[] = await response.json();
            console.log(questions);
            validateQuestions(questions);
            // console.log(questions);


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

  return <div className="">Home</div>
}

export default Home
