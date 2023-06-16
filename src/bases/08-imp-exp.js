import {owners} from '../data/heroes'
import superheroes from '../data/heroes'

export const getHeroById = id => superheroes.find((heroe) => heroe.id === id)

export const getHeroByOwner = owner => superheroes.filter((heroe) => heroe.owner == owner)
