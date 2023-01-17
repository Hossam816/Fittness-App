import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import { Detail, ExerciseVideos, SimilarExercises } from '../components';


const ExerciseDetail = () => {
    const [ exerciseDetail, setExerciseDetail ] = useState({});
    const [ exerciseVideos, setExerciseVideos ] = useState([]);
    const [ targetMuscleExercises, setTargetMuscleExercises ] = useState([]);
    const [ equipmentExercises, setEquipmentExercises ] = useState([]);


    const { id } = useParams();

    useEffect(() => {

        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            console.log(exerciseDbUrl);


            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            console.log(exerciseVideosData);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        };
        fetchExercisesData();
    }, [ id ]);
    return (
        <Box>
            <Detail exerciseDetail={ exerciseDetail } />
            <ExerciseVideos exerciseVideos={ exerciseVideos } name={ exerciseDetail.name } />

            <SimilarExercises targetMuscleExercises={ targetMuscleExercises } equipmentExercises={ equipmentExercises } />
        </Box>
    );
};

export default ExerciseDetail;