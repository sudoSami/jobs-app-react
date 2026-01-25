import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import Spinner from '../components/Spinner';

const JobPage = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(()=>{
        const fetchJob = async () => {
      const apiUrl = `http://localhost:8000/jobs/${id}`;
      try {
        await new Promise(resolve => setTimeout(resolve, 400));
      
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJob(data);
      } catch (error) {
          console.log('error loading data', error)
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
    }, [])

  return (
    <div>
    {loading ? <Spinner loading={loading} /> : (
      <div>{job.title}</div>
    )}
  </div>
  )
}

export default JobPage