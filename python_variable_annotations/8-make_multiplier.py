#!/usr/bin/env python3
"""Module that provides a make_multiplier function with type annotations."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a given multiplier.

    Args:
        multiplier: The float value to multiply by

    Returns:
        A callable that takes a float and returns it multiplied by multiplier
    """
    def multiply(n: float) -> float:
        """Multiply n by the enclosing multiplier value."""
        return n * multiplier
    return multiply
