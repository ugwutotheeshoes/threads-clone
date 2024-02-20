export function timeAgo(date: string): string {
    const now = new Date();
    const milliSec = now.getTime() - new Date(date).getTime()
    const secs = Math.floor(milliSec / 1000)
    const mins = Math.floor(secs / 60)
    const hours = Math.floor(mins / 60)
    const days = Math.floor(hours / 24)

    if (secs < 60) {
        return secs + "s"
    } else if (mins < 60) {
        return mins + "min";
    } else if (hours < 24) {
        return hours + "hr";
    } else if (days === 1) {
        return "Yesterday";
    } else {
        return days + "days";
    }
}