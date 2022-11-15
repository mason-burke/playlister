import React, { useEffect, useState } from 'react'
import { SortState } from '../../App'
import { song } from '../../global/globalUtils'
import './FilterView.scss'

export interface IFilterViewProps {
	filterResults: boolean[]
	setFilterResults: React.Dispatch<React.SetStateAction<boolean[]>>
	setSort: React.Dispatch<React.SetStateAction<SortState>>
	sortedResults: song[]
}

export const FilterView = (props: IFilterViewProps) => {
	const { filterResults, setFilterResults, setSort, sortedResults } = props
	const [songFilter, setSongFilter] = useState<string>('')
	const [artistFilter, setArtistFilter] = useState<string>('')
	const [genreFilter, setGenreFilter] = useState<string>('')

	useEffect(() => {
		handleFilterChange()
	}, [songFilter, artistFilter, genreFilter])

	const handleFilterChange = () => {
		const newFilterResults = [...filterResults]

		for (let index = 0; index < newFilterResults.length; index++) {
			newFilterResults[index] = passesFilters(sortedResults[index])
		}

		setFilterResults(newFilterResults)
	}

	const passesFilters = (song: {
		title: string
		artist: string
		genre: string
	}): boolean => {
		return (
			song.title.toLowerCase().includes(songFilter.toLowerCase()) &&
			song.artist.toLowerCase().includes(artistFilter.toLowerCase()) &&
			song.genre.toLowerCase().includes(genreFilter.toLowerCase())
		)
	}

	const clearFilters = () => {
		setSongFilter('')
		setArtistFilter('')
		setGenreFilter('')
		setSort(0)
	}

	return (
		<div className="filter-view" id="filter-container">
			<h2>Filters</h2>
			<form className="filters-form" id="filters-form">
				Filter by song title:
				<input type='text' onChange={(event) => setSongFilter(event.target.value)} />
				Filter by artist:
				<input type='text' onChange={(event) => setArtistFilter(event.target.value)} />
				Filter by genre:
				<input type='text' onChange={(event) => setGenreFilter(event.target.value)} />
				Sort by duration:
				<div className="flex-col-center">
					<div>
						<input
							type="radio"
							id="descending"
							name="sort-method"
							onClick={() => setSort(-1)}
						/>
						<label htmlFor="descending">Descending</label>
						<br/>
						<input
							type="radio"
							id="ascending"
							name="sort-method"
							onClick={() => setSort(1)}
						/>
						<label htmlFor="ascending">Ascending</label>
					</div>
					<div></div>
				</div>
				<input type="reset" title="reset" onClick={clearFilters} />
			</form>
		</div>
	)
}
