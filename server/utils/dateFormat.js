module.exports = {
    idDateFormat: (dateString) => {
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const [year, month, day] = dateString.split("-");

        const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
        return formattedDate;
    }
}