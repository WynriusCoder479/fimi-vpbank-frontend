const employerStatus = [
	{
		value: 'FT',
		label: 'Toàn thời gian'
	},
	{
		value: 'PT',
		label: 'Bán thời gian'
	},
	{
		value: 'BO',
		label: 'Chủ doanh nghiệp/Kinh doanh tự do'
	},
	{
		value: 'UE',
		label: 'Chưa có việc làm'
	},
	{
		value: 'R',
		label: 'Nghỉ hưu'
	}
]

const jobPosition = [
	{
		value: 'POSH4',
		label: 'Quản lý',
		group: ['FT']
	},
	{
		value: 'POSH11',
		label: 'Chủ hộ kinh doanh',
		group: ['BO']
	},
	{
		value: 'POSH29',
		label: 'Nhân viên/chuyên viên văn phòng',
		group: ['FT', 'PT']
	},
	{
		value: 'POSH28',
		label:
			'Nhân viên kinh doanh (xe ô tô, bảo hiểm, bất động sản, chứng khoán...)',
		group: ['FT', 'PT']
	},
	{
		value: 'POSH21',
		label: 'Tài xế/Lái xe',
		group: ['FT', 'PT']
	},
	{
		value: 'POSH14',
		label: 'Công nhân/Bảo vệ',
		group: ['FT']
	},
	{
		value: 'POSH12',
		label: 'Thực tập/ sinh viên',
		group: ['UE']
	},
	{
		value: 'POSH10',
		label: 'Nghỉ hưu/Thất nghiệp/Nội trợ',
		group: ['UE']
	},
	{
		value: 'POSH37',
		label: 'Khác',
		group: ['FT', 'PT']
	}
]

const employerStatusEl = document.getElementById('employer_status')
const jobPositionEl = document.getElementById('job_position')
const employerNameEl = document.getElementById('employer_name')

employerStatus.forEach(status => {
	const option = document.createElement('option')

	option.value = status.value
	option.textContent = status.label

	employerStatusEl.appendChild(option)
})

employerStatusEl.addEventListener('change', e => {
	const currentEmployerStatus = e.currentTarget.value

	jobPosition
		.filter(pos => pos.group.includes(currentEmployerStatus))
		.forEach(job => {
			const option = document.createElement('option')

			option.value = job.value
			option.textContent = job.label

			jobPositionEl.appendChild(option)
		})
})
