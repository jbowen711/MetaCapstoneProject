import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the Select Date button', () => {
    render(<Bookings/>);
    const headingElement = screen.getByText("Select Date");
    expect(headingElement).toBeInTheDocument();
})