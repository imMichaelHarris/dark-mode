import { useState } from "react";
import {useLocalStorage} from './useLocalStorage'

const [darkMode, setDarkMode] = useLocalStorage("darkMode-On")