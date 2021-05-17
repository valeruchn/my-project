export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class TopPageModel {
	firstCategory: TopLevelCategory
	secondCategory: string
	title: string
	category: string
	hh?: {
		count: number
		juniorSalary: number
		middleSalary: number
		seniorSalary: number
	}
	advantages: {
		title: string
		description: string
	}[]
	seoTest: string
	tegsTitle: string
	tags: string[]
}
