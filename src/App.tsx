import type { ChangeEvent } from 'react';
import type { TMesh } from './components/Taiwan';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { animated, useTransition } from '@react-spring/web'
import { Stats } from '@react-three/drei';
import Select from './components/Select';
import Experience from './components/Experience';
import WeatherInfo from './components/WeatherInfo';
import { Leva } from 'leva';
import useFetchWeathers from './hooks/useFetchWeathers';
import { useSelectedCity } from './hooks/useSelectedCity';
import locations from './constants/locations';

const AnimatedWeatherInfo = animated(WeatherInfo);

export default function App() {
  const { data, isLoading, error } = useFetchWeathers();
  const { weather, setWeather, selectedCity, setSelectedCity } = useSelectedCity();
  const taiwanRef = useRef<THREE.Group>(null);
  
  const transition = useTransition(weather ?? [], {
    from: {
      opacity: 0,
      y: 80,
    },
    enter: {
      opacity: 1,
      y: 0
    },
    exitBeforeEnter: true
  });

  useEffect(() => {
    if (isLoading || !data) {
      return;
    }
    
    const locationChinese = locations[selectedCity?.name as keyof typeof locations]
    const locationWeather = data.find(d => d.location === locationChinese);

    if (locationWeather) {
      setWeather(locationWeather);
    } else {
      setWeather(undefined);
    }
  }, [selectedCity]);

  const onSelectCity = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!taiwanRef.current) {
      return;
    }
    
    const cityName = e.target.value;

    if (!cityName) {
      setSelectedCity(undefined);
    }
    
    const foundMesh = taiwanRef.current.children.find(mesh => mesh.name === cityName);

    if (foundMesh) {
      setSelectedCity(foundMesh as TMesh);
    } 
  };

  return (
    <>
      <Leva flat collapsed hidden />
      <Stats />

      <Experience taiwanRef={taiwanRef} />

      <div className="p-6 md:p-10 mx-auto w-full max-w-[1200px] h-full dark:text-gray-50 relative pointer-events-none">
        <h1 className="mb-6 md:py-4 text-center md:text-left text-3xl md:text-4xl font-bold">??????????????????</h1>

        <Select onChange={onSelectCity} title="selected city" value={selectedCity?.name || ''}>
          <option value="">???????????????...</option>
          <option value="KeelungCity">?????????</option>
          <option value="TaipeiCity">?????????</option>
          <option value="NewTaipeiCity">?????????</option>
          <option value="TaoyuanCountry">?????????</option>
          <option value="HsinchuCity">?????????</option>
          <option value="HsinchuCountry">?????????</option>
          <option value="MiaoliCountry">?????????</option>
          <option value="TaichungCity">?????????</option>
          <option value="ChanghuaCountry">?????????</option>
          <option value="NantouCountry">?????????</option>
          <option value="YunlinCountry">?????????</option>
          <option value="ChiayiCity">?????????</option>
          <option value="ChiayiCountry">?????????</option>
          <option value="TainanCity">?????????</option>
          <option value="KaohsiungCity">?????????</option>
          <option value="PingtungCountry">?????????</option>
          <option value="TaitungCountry">?????????</option>
          <option value="HualienCountry">?????????</option>
          <option value="YilanCountry">?????????</option>
          <option value="PenghuCountry">?????????</option>
          <option value="KinmenCountry">?????????</option>
          <option value="LienchiangCountry">?????????</option>
        </Select>

        {weather && (
          transition((style) => (
            <AnimatedWeatherInfo weather={weather} style={style} />
          ))
        )}
      </div>
    </>
  );
}

